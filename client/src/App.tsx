import { useState, useEffect } from "react";
import axios from "axios";
import Landing from "./pages/Landing";

function App() {
  // const [cards, setCards] = useState([]);
  // const [money, setMoney] = useState(1000);
  // const [inventory, setInventory] = useState([]);

  // // UPDATE MARKET
  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/cards");
  //       setCards(response.data);
  //       console.log(cards);
  //     } catch (error) {
  //       console.error("Error fetching cards:", error);
  //     }
  //   }
  //   fetchCards();
  //   const interval = setInterval(fetchCards, 5000);
  //   return () => clearInterval(interval);
  // }, []);


  // COMPONENT RENDER
  return (
    <>
      <Landing />
      {/* <h1 className = " text-2xl text-center">Player</h1>
      <h2 className="">Money:{money}</h2>
      <h2 className="">Inventory:</h2>
      <div className=" w-4/6 border border-black min-h-2">{
        inventory.map((item, index) => (
          <div key={index} className="border border-black">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      ))
      }</div>
      <div className="w-full flex-col justify-center">
        <h1 className="text-center">Market</h1>
        <div className="w-full flex justify-center">
          {cards.map((card) => (
          <div key={card.name} className="card">
            <h3>{card.name}</h3>
            <p>Price: {card.price}</p>
            <button onClick={() => setMoney(money - card.price)}>Buy</button>
          </div>
        ))}
        </div>
      </div> */}
    </>
  )
}

export default App
