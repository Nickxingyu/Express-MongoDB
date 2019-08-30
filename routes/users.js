const express = require('express')
const UserDB=require('../DB/UserDB')
const id=require('../DB/idtest')
const query=require('querystring')
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

router.get('/test/:id/:name/:email',(req,res,next)=>{
  console.log(req.params.id)
  idYouGet=req.params.id
  nameYouGet=req.params.name
  emailYouGet=req.params.email  //從url中取得id、name、email。
  console.log("You enter the test router.")
  if(id.find(idYouGet)) res.end("This id exist.") // 如果該ID已存在則不加入資料庫並回覆已存在
  else{
    let testid=new id({ID:idYouGet,name:nameYouGet,email:emailYouGet}) // 先new一個entity，存放欲新增的資料
    testid.save((err,docs)=>{
      if(err) console.log(err);
      console.log('儲存成功： '+ docs);
      res.end('Success to add document \n'+ docs)
    })//儲存成功，callback function的參數中，第一個err，會catch 錯誤訊息，第二個docs，會接收成功儲存的物件
  }
})


router.get('/ResultOfTest/:name',(req,res,next)=>{
  let getName=req.params.name//從url中取得name 
  console.log("You want to get the result of test.")
  id.find({name:getName},{ID:1,name:1,email:1},(err,doc)=>{//第一個參數查找跟name相符的資料，第二個參數則是決定回傳的資料欄位，第三個為callback function
    if(err)return err
    res.end('Get \n'+doc)
  })
  //res.end("ID is "+DataYouWantToGet.ID+"\n Name is "+DataYouWantToGet.name+"\n Email is "+DataYouWantToGet.email)
})

router.get('/deleteAll/:id',(req,res,next)=>{//刪除所有ID和url中id欄位相符的entity
  IdBeDeleted=req.params.id
  //console.log(typeof req.params.id)
  console.log('Delete All')
  id.deleteMany({ID:IdBeDeleted},(err)=>{
    console.log('Delete all')
  })
  res.end('You delete all')
})

module.exports = router;
