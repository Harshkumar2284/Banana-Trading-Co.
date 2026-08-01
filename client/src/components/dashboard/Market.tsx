import { useEffect, useState } from "react"
import axios from 'axios'

export default function Market() {
  const [market,setMarket] = useState(null)
  useEffect(()=>{
    const getMarket = async()=>{
      const response = await axios.get('/api/market')
      console.log(response.data)
      setMarket(response.data)
    }
    getMarket()
  },[])
  return (
    <div className="">
      <h1 className="heading text-4xl primary-color">Market Prices</h1>
      <h2 className="primary-color heading">Live prices, ticking every few seconds</h2>
      <div className="mt-10 w-full">
        {
          market?(
            market.map((card)=>{
              return(
                <div key={card.id} className="primary-font primary-color border p-4 w-3/12 rounded-2xl">
                  <h1 className="text-xl">{card.name}</h1>
                  <h2>Rarity</h2>
                  <h3>{card.currentPrice} Bananas</h3>
                </div>
              )
            })
          ):(
            <h1 className="primary-font text-4xl primary-color">Loading...</h1>
          )
        }
      </div>
    </div>
  )
}
