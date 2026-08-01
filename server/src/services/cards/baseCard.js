// Defining Card
const cards = [{
    name: "Plantain Prime",
    id: "1",
    basePrice: 1000,
    currentPrice: 1000,
    targetPrice: 1000,
    history: [],
    min: 1000,
    max: 1000
}]

// Card Update Logic
// const updateCardPrice = () => {
//     // Pull and Swing
//     const k = 0.01
//     const maxSwing = 40

//     cards.forEach(card => {
//         const noise = Math.random() * maxSwing * 2 - maxSwing
//         let newPrice = card.currentPrice + (k*(card.targetPrice - card.currentPrice)) + noise
//         newPrice = Math.max(Math.round(newPrice*100)/100, 1)
//         card.currentPrice = newPrice
//         // if(newPrice>card.max){
//         //     card.max = newPrice
//         // }else if(newPrice<card.min){
//         //     card.min = newPrice
//         // }
//         console.log(`Card prices updated. Current: ${card.currentPrice}`)
//     })

// }
// setInterval((updateCardPrice), 100)
// const test = () => {
//     for (let i = 0; i < 100000; i++) {
//         const k = 0.01
//         const maxSwing = 40
//         cards.forEach(card => {
//             const noise = Math.random() * maxSwing * 2 - maxSwing
//             let newPrice = card.currentPrice + (k * (card.targetPrice - card.currentPrice)) + noise
//             newPrice = Math.max(Math.round(newPrice * 100) / 100, 1)
//             card.currentPrice = newPrice
//             if (newPrice > card.max) {
//                 card.max = newPrice
//             } else if (newPrice < card.min) {
//                 card.min = newPrice
//             }
//         })
//     }
//     console.log(`Card prices updated. Max: ${cards[0].max}, Min: ${cards[0].min}, Current: ${cards[0].currentPrice}`)
// }
// test()

module.exports = cards