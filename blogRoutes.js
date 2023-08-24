const express = require("express");

const router = express.Router(); 

const blogModel = require("./blogModel");


const {getAllPosts , getPostById , addNewBlog , updatePostById , deleteBlogById} = require("./blogControllers");

router.get("/" , getAllPosts);

router.get("/:id" , getPostById);

router.post("/" , addNewBlog);

router.put("/:id" , updatePostById);

router.delete("/:id" , deleteBlogById);











module.exports = router ;