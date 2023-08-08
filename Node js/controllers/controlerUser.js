const User = require("../models/userSchema");


const saveUser =  (req, res) => {
    const user = new User(req.body);
    //console.log(req.body)
    user
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  }



  const getAllUsers= (req,res)=>{
    User.find()
    .then((result) => {
     
      res.status(200).json(result);
  })

    .catch((err) => {
      console.log(err);
    });
  }




  const deleteUser=((req,res) => {

    User.deleteOne(
     {name: req.params.name})
      .then(result => {
       // console.log(result);
        res.status(200).json("done");
      })
      .catch((err) => {
        res.status(400).json(err);
      });  

})


const updateUser=((req,res) => {

    User.findOneAndUpdate(
     {name: req.params.name},req.body
    )
      .then(result => {
       // console.log(result);
        res.status(200).json("done");
      })
      .catch((error) => {
        res.status(400).json(error)
      });  

})






module.exports = {
    saveUser,
    getAllUsers,
    deleteUser,
    updateUser
}