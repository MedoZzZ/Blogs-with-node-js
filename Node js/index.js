const express = require("express");
const app = express();
const port = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allArticleRoutes = require("./routes/allBlogs");






// live
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");

const { ifError } = require("assert");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongo db
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://MedoZ:123123M@cluster0.ikjcdbp.mongodb.net/MedoZ?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listen at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//get methods
app.get("/", (req, res) => {
  res.redirect("/all-articles");
});
app.get("/add-new-article", (req, res) => {
  res.render("add-new-article");
});

app.use('/articles',allArticleRoutes)
app.use((req, res) => {
  res.status(404).send("<h1>Error 404 <br> Page not found</h1>");
});
