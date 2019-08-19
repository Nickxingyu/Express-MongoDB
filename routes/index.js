var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Xingyu's  Space" });
});


router.get('/friendship',function(req,res){
    var db=req.db;
    var collection=db.get('friend');
    collection.find({},{},function(e,docs){
      res.render(
          "friendship",{friendship:docs}

      );
      console.log(docs);
    })
})

module.exports = router;
