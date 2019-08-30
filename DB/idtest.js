const mongoose=require('mongoose')
const schema=mongoose.Schema({
    ID:String,
    name:String,
    email:String
})
module.exports=mongoose.model('test',schema)