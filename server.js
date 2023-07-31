const express = require("express");
const cors = require("cors");

const products = [
    {
      name: "Coca-Cola",
      price: 1,     
      count: 5, 
    },
    {
      name: "Coca-Cola Zero",
      price: 0.70,      
      count: 5, 
    },
    {
      name: "Sprite",
      price: 0.60,      
      count: 5, 
    },
    {
      name: "Fanta",
      price: 0.50,      
      count: 5, 
    },
    {
      name: "Pepsi",
      price: 0.85,      
      count: 5, 
    },

    {
      name: "snickers",
      price: 0.80,      
      count: 5, 
    },
    {
      name: "Mars",
      price: 0.55,      
      count: 5, 
    },
    {
      name: "M&M's",
      price: 0.75,      
      count: 5, 
    },
    {
      name: "bounty",
      price: 0.95,      
      count: 5, 
    },
    {
      name: "Twix",
      price: 0.90,      
      count: 5, 
    },
    
    {
      name: "Ruffles",
      price: 0.45,      
      count: 5, 
    },
    {
      name: "Cheetos",
      price: 0.70,      
      count: 5, 
    },
    {
      name: "Lay's",
      price: 0.70,      
      count: 5, 
    },
    {
      name: "Pringles",
      price: 0.70,      
      count: 5, 
    },
    {
      name: "Doritos",
      price: 0.75,      
      count: 5, 
    },
]

const app = express();



app.use(cors({
    origin: "http://localhost:3000",
}));


app.get("/products", (req, res, next) => {
    res.json(products);
});


app.listen(5000, () => {
 console.log("Server running on port 3000");
});