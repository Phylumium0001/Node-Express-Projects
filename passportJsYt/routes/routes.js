const router = require("express").Router();
router.get("/about",(req,res,next)=>{
  res.send("<h1>About</h1>");
});

module.exports = router;
