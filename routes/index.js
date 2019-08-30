const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Xingyu's  Space" });
});


/*router.get('/list',function(req,res){
    var db=req.db;
    var collection=db.get('friend');
    collection.find({},{},function(e,docs){
      res.render(
          "list",{friendship:docs}

      );
      console.log(docs);
    })
})
*/

router.post('/signup',(req,res,next)=>{

})

module.exports = router;
