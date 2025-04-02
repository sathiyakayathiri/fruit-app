const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let fruits = [];

// API to add a fruit
app.post("/add-fruit", (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Fruit name is required" });
    }
    fruits.push(name);
    res.json({ message: "Fruit added successfully" });
});

// API to get the list of fruits
app.get("/fruits", (req, res) => {
    res.json({ fruits });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});