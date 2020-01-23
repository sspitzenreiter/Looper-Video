var express = require('express');
var router = express.Router();
const path = require('path');
const multer = require('multer');
var serveIndex = require('serve-index');
const storage = multer.diskStorage({
  destination: "./video_upload/",
  filename: (req, file, cb)=>{
    const ext = path.extname(file.originalname);
    if(ext==".PNG"){
      cb(null, "VID-"+Date.now()+path.extname(file.originalname));
    }
    
  }
})


router.use('/video', express.static('video_upload'));
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
}).single("files");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('/video_upload/VID-1579732875252.pdf');
});

router.post('/submit-form', (req, res, next)=>{
  
  upload(req, res, (err)=>{
    var response = {
      status:'1'
    }
    res.send(response);
  })
})

module.exports = router;
