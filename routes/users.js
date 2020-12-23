var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user routes');
});

router.get('/id', function (req, res, next) {
  res.send('Id route')
})

module.exports = router;
