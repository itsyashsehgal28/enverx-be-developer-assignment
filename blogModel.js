const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    "title" : {
        type : String , 
        required : [true , "Title is Required"] ,
        minLength : [5 , "Minimum Length for title is 5 Characters"] , 
        maxLength : [70 , "Maximum length for title is 100 Characters"]
    } , 

    "content" : {
        type : String , 
        required : [true , "Content is Required"] ,
        minLength : [10 , "Minimum Length for content is 250 characters"] , 
        maxLength : [4000 , "Maximum Length for content is 4000 characters"]
    } , 

    "category" : {
        type : String , 
        required : [true , "Category is Required"] ,
        enum : { 
                    values : ["Food" , "Travel" , "Vlogs" , "Technology" , "Innovation" , "Others"] ,
                    message : "Not a Valid Category , Choose from the list"
               }
    } ,

    // "createdAt" : {
    //     type : Date , 
    //     required : false
    // }, 
},
{
    timestamps : true , 
});

module.exports = mongoose.model( "Blog" , blogSchema);