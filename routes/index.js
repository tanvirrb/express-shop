const express = require('express');
const router = express.Router();
// const middleware = require('../middlewares/middlewares');
const fileController = require('../controllers/file.controller');

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ message: 'Hello World' });
});

router.post(
  '/upload',
  fileController.upload.single('myfile'),
  fileController.fileUpload
);

module.exports = router;
