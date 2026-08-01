const express = require('express')
const router = express.Router()
const getMarket = require('../controllers/market.controller')

router.get('/market',getMarket)

module.exports = router