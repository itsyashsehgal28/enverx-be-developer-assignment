const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    "title" : {
        type : String , 
        required : true
    } , 

    "content" : {
        type : String , 
        required : true
    } , 

    "cateogory" : {
        type : String , 
        required : true
    } , 

    "createdAt" : {
        type : Date , 
        required : false
    }, 
},
{
    timestamps : true , 
});

module.exports = mongoose.model( "Blog" , blogSchema);