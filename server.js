const express = require("express");

const app = express();
app.use(express.json());

const port = 8081;

app.get("/" , (req , res) => {
    res.status(200).send({message : "Server is up and running"});
});

app.get("*" , (req , res) => {
    res.status(501).send({message : "Page not found "})
});

app.listen(port , () => {
    console.log(`Node.js server started at port ${port}`);
});