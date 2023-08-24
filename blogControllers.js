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
            message : "No Blogs Found with this ID , please try again with the correct id" ,
        })
    }

    res.status(200).json({
        success : "true" , 
        data : blog ,
    })

};


// `POST /posts` - Create a new blog post
exports.addNewBlog = async(req , res) => {
    const {data} = req.body ; 

    if(!data)
    {
        return res.status(404).json({
            success : false ,
            message : "data not found" , 
        });
    }

    await blogModel.create(data);
    const allBooks = await blogModel.find();

    return res.status(201).json({
        success : true ,
        data : allBooks , 
    })
};


// `PUT /posts/:id` - Update an existing blog post.
exports.updatePostById = async(req, res) => {
    const {id} = req.params ; 
    const {data} = req.body ; 

    if(!data)
    {
        return res.status(404).json({
            success : false , 
            data : await blogModel.find() ,
        })
    }

    const updateBlogData = await blogModel.findOneAndUpdate({_id : id} , data , {new : true});

    res.status(200).json({
        success : true , 
        message : "Book Updated By Their ID" ,
        data : updateBlogData ,
});
};

// `DELETE /posts/:id` - Delete a blog post.
exports.deleteBlogById = async(req , res) => {
    const {id} = req.params ;
    const deleteBlog = await blogModel.findByIdAndDelete(id);

    if(!deleteBlog)
    {
        return res.status(404).json({
            success : false , 
            message : "Not the correct id , please enter the correct id"
        })
    }

    return res.status(200).json({
        success : true , 
        message : "Blog Deleted" , 
        UpdatedData : await blogModel.find() , 
});
};