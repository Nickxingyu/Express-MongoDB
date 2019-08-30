const mongoose=require('mongoose');

const schema=mongoose.Schema({
    email:String,
    password:String,
    point:Number,
}) 
module.exports = mongoose.model('User',schema)