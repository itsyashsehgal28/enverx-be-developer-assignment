const blogModel = require("./blogModel");

// - `GET /posts` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
exports.getAllPosts = async(req , res) => {
    
    try{
        const {Sortby , filter } = req.query ;
        let blog = {} ; 
        const filterObj = (filter)?{'category' : filter}:{};
        if(Sortby === "createdAt"){
            blog = await blogModel.find(filterObj).sort({'createdAt' : -1});
        }
        else if(Sortby === "title"){
             blog = await blogModel.find(filterObj).sort({'title' : 1});
        }

        if(!blog){

            return res.status(404).json({
                message : "No Blogs Found"
            })
        };


        res.status(200).json({
            success : "true" , 
            data : blog
        });
    }

    catch(e) {
        console.error(e.message);
        res.status(500).json({
            message : e.message
        });
    };
};

// - `GET /posts/:id` - Get a specific blog post by ID.
exports.getPostById = async(req , res) => {
   try{
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
   }
   catch(e){
        console.log(e.message);
        res.status(500).json({
            message : e.message 
        })
    };

};

// `POST /posts` - Create a new blog post
exports.addNewBlog = async(req , res) => {
    try{
        const data = req.body; 
        // console.log(req.body);
        // console.log(data);
        if(!data)
        {
            return res.status(404).json({
                message : "data not found" 
             });
        }

        await blogModel.create(data);
        const allBlogs = await blogModel.find();

        return res.status(201).json({
            success : true ,
            data : allBlogs , 
            })
        }

    catch(e){
        console.error(e.message);
        res.status(500).json({
            message : e.message
        });
    }
};

// `PUT /posts/:id` - Update an existing blog post.
exports.updatePostById = async(req, res) => {
    try{
            const id = req.params.id ; 
            const data = req.body ; 

            if(await blogModel.findById(id))
            {
                const updateBlogData = await blogModel.findOneAndUpdate({_id : id} , data , {new : true});

                res.status(200).json({
                    success : true , 
                    message : "Blog Updated By Their ID" ,
                    data : updateBlogData ,
                });
            }
            else{
                return res.status(404).json({
                    success : false , 
                    message : "Retry with the Correct ID" ,
                })
            }
        }

    catch(e){
        console.error(e.message);
        res.status(500).json({
            message : e.message
        });
    };
};

// `DELETE /posts/:id` - Delete a blog post.
exports.deleteBlogById = async(req , res) => {
    try{
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
        }

    catch(e){
        console.error(e.message);
        res.status(500).json({
            message : e.message 
        });
    };
    
};