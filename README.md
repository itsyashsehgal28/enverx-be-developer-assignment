[![N|Solid](https://iili.io/Hi9giog.png)](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

## _Assginment For Backend Developer Role_

### Instructions
``` diff
- Fork this repository
- Take a fresh `pull`
- Create a `development` branch
- `Push` the updated code after task completion
Note: Make sure to add proper `commit` messages
```

### Task Requirements
1. Create a RESTful API for a simple blog application.
2. Use Node.js and Express.js as the backend framework.
3. Implement CRUD (Create, Read, Update, Delete) operations for blog posts.
4. Store the blog posts in a dB
5. Include validation for the API endpoints to ensure data integrity.
6. Implement error handling and return appropriate HTTP status codes.
7. Use Git for version control and host the project on GitHub.
8. Write clear and concise documentation on how to set up and use the API.
9. Use Typescript to get a Bonus point.

### Functional Requirements
1. Set up a new Node.js project and initialize it with a package.json file.
2. Create the necessary Express.js routes and controllers for CRUD operations on blog posts.

- `GET /posts` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
- `GET /posts/:id` - Get a specific blog post by ID.
- `POST /posts` - Create a new blog post.
- `PUT /posts/:id` - Update an existing blog post.
- `DELETE /posts/:id` - Delete a blog post.

3. Implement validation for the API endpoints to ensure the data is correct and complete.
4. Handle errors gracefully and return appropriate HTTP status codes (e.g., 404 for not found, 500 for server errors, etc.).
5. Test the API endpoints using a tool like Postman or cURL.
6. Write a README.md file with instructions on setting up the project, running it, and using the API.
7. Initialize a Git repository, commit your code regularly, and push it to GitHub.
8. Optionally, include any additional features or improvements you think would enhance the API.

### Timeline
The estimated time to complete this assignment is 6-7 hours, but it may vary based on your familiarity and experience with the technologies.

### To Be Considered
1. The submitted code should be plagiarism free otherwise your application will be disqualified
2. Please complete the assignment and submit it to us by the submission deadline assigned to you. 
3. follow the instructions carefully, as we will evaluate your code, documentation, and adherence to best practices. Once you have finished, please send us the GitHub repository link.
4. If you have any questions or need further clarification, please don't hesitate to reach out to us at hr@enverx.com. We look forward to reviewing your work and discussing it with you in the next stage of the interview process.



# Starting with the project 
1. fork the repository using ----> git clone "repository url" , cd into the working directory 
2. make a fresh pull using ----> git pull -f
3. make a new branch development using -----> git checkout -b development
4. make a new file and do the first commit to check everything is working or not 
5. Server initialisation ----> npm init
6. install node in pc and express , mongoose , dotenv , nodemon through npm install after initialisation (npm init) 
7. install nodemon as a developer to use developer dependencies ----> npm i nodemon --save-dev
8. make changes in the script , "start" : "node server.js" , "dev" : "nodemon server.js"


# Intialize a MongoDB project 
>> mongodb.com make a new project
>> connect the database to the project using mongo url from drivers and paste it in the .env file 
>> hide the .env file by adding it to gitignore
>> make a databaseConnection file used to connect to the database and fetch information from the database


# Route and Endpoints 

- `GET /posts` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
- `GET /posts/:id` - Get a specific blog post by ID.
- `POST /posts` - Create a new blog post.
- `PUT /posts/:id` - Update an existing blog post.
- `DELETE /posts/:id` - Delete a blog post.


# MVC Architecture 
>> We will be using MVC architecture here 

>> M : modal 
>> V : View 
>> C : Controller

# Creating a model for the database 
>> create a schema named blogSchema , mention the field names like title , content , category , timestamps , you can also add fields as per your choice 
>> make validations for the data like required , minlength , maxlength , enum etc. 
>> export the model to the server.js file 

# Route file 
>> this will be the file where all routes of type "/posts" will be available 
>> add all routes and direct them to their respective controllers

# Controller file 
>> this file will function as the brain of the APIs 
>> all functions and commands with respect to URL will take place in this file 

# Test the project APIs 
>> testing can be done with different applications like postman , cURL or thunderClient 
>> here i have used postman and thunderClient


# workflow

>> server.js >> blogroutes.js >> blogControllers.js

>> databaseConnection.js is the database connection file it has no relation to the flow 
>> package.json contains the list of packages with their versions it has no relation to the flow 
>> blogModel.js contains the model according to which the values in the database will be stored 

