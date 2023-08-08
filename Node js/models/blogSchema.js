const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema  = new Schema({
    name: { type: String },
    comment: { type: String, required: true },
});

const articleSchema = new Schema({
    name:{type:String,},
    title: String,
    comments:[commentSchema ],
    body: String,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
