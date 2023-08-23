const blogModel = require("./blogModel");

// - `GET /posts` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
exports.getAllPosts = async(req , res) => {
    const blog = await blogModel.find();
    if(blog.length === 0){
        return res.status(404).json({
            success : "false" ,
            message : "No Blogs Found"
        })
    }

    res.status(200).json({
        success : "true" , 
        data : blog ,
    })
}

// - `GET /posts/:id` - Get a specific blog post by ID.
exports.getPostById = async(req , res) => {
    const {id} = req.params ; 
    const blog = await blogModel.findById(id);

    if(!blog)
    {
        return res.status(404).json({
            success : "false" ,
            message : "No Blogs Found with this ID , please try again with the correct id"
        })
    }

    res.status(200).json({
        success : "true" , 
        data : blog ,
    })

}