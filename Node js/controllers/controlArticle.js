const Article = require("../models/blogSchema");




const allBlogs =  (req, res) => {
    Article.find()
      .then((result) => {
       
        res.status(200).json(result);
    })

      .catch((err) => {
        console.log(err);
      });
      
  }


const saveArticle =  (req, res) => {
    const article = new Article(req.body);
    //console.log(req.body)
    article
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const updateArticle=((req,res) => {

        // Article.updateOne(
        //     { title:req.params.title }, // filter to target the specific book and chapter
        //     { $push: { comment: { name: req.body.comment.name, text: req.body.comment.text } } } // use the positional operator to update the pages property of the matched chapter
        //   )
        Article.findOneAndUpdate(
         {title: req.params.title},req.body
        )
          .then(result => {
           // console.log(result);
            res.status(200).json("done");
          })
          .catch((error) => {
            console.log(error);
          });  
    
  })


  const addCommentArticle=((req,res) => {
  //  const newComment = { name: req.body.name, comment: req.body.comment };
    Article.findOneAndUpdate(
     {title: req.params.title},{ $push: { comments: req.body} },
    )
      .then(result => {
       // console.log(result);
        res.status(200).json("done");
      })
      .catch((error) => {
        console.log(error);
      });  

})


const deleteCommentArticle=((req,res) => {
  //  const newComment = { name: req.body.name, comment: req.body.comment };

  // Article.updateOne
    Article.findOneAndUpdate(
     {title: req.params.title},{ $pull: { comments: req.body} },
    )
      .then(result => {
       // console.log(result);
        res.status(200).json("done");
      })
      .catch((error) => {
        console.log(error);
      });  

})


  const deleteArticle=((req,res) => {

    // Article.updateOne(
    //     { title:req.params.title }, // filter to target the specific book and chapter
    //     { $push: { comment: { name: req.body.comment.name, text: req.body.comment.text } } } // use the positional operator to update the pages property of the matched chapter
    //   )
    Article.deleteOne(
     {title: req.params.title})
      .then(result => {
       // console.log(result);
        res.status(200).json("done");
      })
      .catch((error) => {
        console.log(error);
      });  

})


module.exports = {
    allBlogs,
    saveArticle,
    updateArticle,
    deleteArticle,
    addCommentArticle,
    deleteCommentArticle
}