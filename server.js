const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my micro service for a cafe." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

const reviewRoutes = require('./routes/reviewRoutes')
app.use('/api/reviews', reviewRoutes)

const dishRoutes = require('./routes/dishRoutes')
app.use('/api/dishes', dishRoutes)

const dataRoutes = require('./routes/dataRoutes')
app.use('/api/data', dataRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on
port ${PORT}.`);
});