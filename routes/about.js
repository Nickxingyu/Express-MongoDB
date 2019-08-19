var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res) {
  res.render('about', { title: "This is a page about us." });
});

module.exports = router;
