const baseCard = require("../services/cards/baseCard")

const getMarket = (req,res)=>{
    res.json(baseCard)
}

module.exports = getMarket