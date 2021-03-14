const router = require("express").Router();

router.get("/register", (req,res)=>{
    res.json({ message: "register" });
});

module.exports = router;