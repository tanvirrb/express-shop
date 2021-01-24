const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/middlewares");
const fileController = require("../controllers/file.controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Hello World" });
});

router.get("/journey", middleware.first, middleware.second, middleware.third);
router.post("/upload", fileController.upload.single("myfile"), fileController.fileUpload)

module.exports = router;
