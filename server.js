const express = require("express");

const app = express();
app.use(express.json());

const port = 8081;

const postRoutes = require("./postRoutes");

app.get("/" , (req , res) => {
    res.status(200).json({message : "Server is up and running"});
});

app.get("/posts" , postRoutes);

app.get("*" , (req , res) => {
    res.status(404).json({message : "Page not found Error 404"});
});

app.listen(port , () => {
    console.log(`Node.js server started at port ${port}`);
});