// Server setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');

// Middleware
app.use(express.json())
app.use(cors({
    origin: '*',
    withCredentials: true,
}))


// Market Simulation
require('./src/services/cards/baseCard.js')

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});