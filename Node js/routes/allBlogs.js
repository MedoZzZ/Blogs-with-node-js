const express = require('express');
const router = express.Router();
const controlArticles = require("../controllers/controlArticle");
const controlerUser = require("../controllers/controlerUser");
const adminAuth=require("../middleware/adminAuth");

//blogs

//http://localhost:5000/articles
router.get("/",controlArticles.allBlogs);

//http://localhost:5000/articles
router.post("/",controlArticles.saveArticle);

//http://localhost:5000/articles/ca
router.put("/:title",controlArticles.updateArticle);

//http://localhost:5000/articles/aaaa
router.delete("/:title",adminAuth,controlArticles.deleteArticle);

//http://localhost:5000/articles/addComment/c
router.post("/addComment/:title",controlArticles.addCommentArticle);

//http://localhost:5000/articles/deleteComment/c
router.post("/deleteComment/:title",controlArticles.deleteCommentArticle);



//users

http://localhost:5000/articles/users
router.post("/users",controlerUser.saveUser);

//http://localhost:5000/articles/users
router.get("/users",controlerUser.getAllUsers);

//http://localhost:5000/articles/users/ahmeda
router.delete("/users/:name",adminAuth,controlerUser.deleteUser);

http://localhost:5000/articles/users/ahmedaa
router.put("/users/:name",controlerUser.updateUser);



module.exports = router