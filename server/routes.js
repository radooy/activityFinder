const router = require("express").Router();
const authController = require("./controllers/authController");
const publicationController = require("./controllers/publicationController");

router.use("/auth", authController);
router.use("/publications", publicationController);


module.exports = router;