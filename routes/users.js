const express = require('express')
const UserDB=require('../DB/UserDB')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res,next) {
  res.send('respond with a resource')
});
router.post('/signup',(req,res,next)=>{
  let userEmail=req.body['email']
  let userPassword=req.body['passward']
  if(UserDB.find({email:userEmail})){
    res.write("This email is used")
    res.end()
  }
  else{
    UserDB.add({'email':userEmail,'passward':userPassword})
    res.write('succeed')
    res.end()
  }
})

module.exports = router;
