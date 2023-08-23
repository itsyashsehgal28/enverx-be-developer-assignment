const express = require("express");

const router = express.Router(); 

const blogModel = require("./blogModel");


const {getAllPosts , getPostById} = require("./blogControllers");

router.get("/" , getAllPosts);

router.get("/:id" , getPostById);













module.exports = router ;