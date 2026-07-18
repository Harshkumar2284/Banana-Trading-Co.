from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import random

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

cards = [
    {
        "name": "Card 1",
        "price": 100,
        "multiplier": 0.1
    }
]

# Market Simulation
async def market_simulation ():
    while True:
        for card in cards:
            print(f'Name:{card["name"]}, Price: {card["price"]}')
        await asyncio.sleep(5)  
        for card in cards:
            direction = random.choice([1+card["multiplier"], 1-card["multiplier"]])
            if direction > 1:
                print("Incrementing price")
            else:
                print("Decrementing price")
            card["price"] *= direction
            card["price"] = round(card["price"], 2)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(market_simulation())


# GET CARDS ENDPOINT
@app.get("/cards")
def get_cards():
    return cards


# BUY CARD ENDPOINT
def cardUpdate(cardName:str, action:str, quantity:int):
    for card in cards:
        if card["name"] == cardName:
            if action == "buy":
                card["price"] += card["multiplier"]*quantity
            elif action == "sell":
                card["price"] -= card["multiplier"]*quantity
            return card

@app.post("/buy_card/{card_name}")
def buy_card(cardName:str):
    for card in cards:
        if card["name"] == cardName:
            cardUpdate(cardName, "buy", 1)
            return card
    return {"message": f"Card {cardName} not found."}