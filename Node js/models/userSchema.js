const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type :String,required:true},
    age:{type:Number, min:[18,'should be greater ']},
    role:{type:Number,enum:[0,1],default:0}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
