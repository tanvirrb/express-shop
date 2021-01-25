const multer = require('multer');

module.exports.fileUpload = (req, res, next) => {
  const file = req.file;
  console.log(file);
  return res.json({ file: `${req.get('host')}/${file.path}` });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split('/')[1];
    cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
  },
});

module.exports.upload = multer({ storage: storage });
