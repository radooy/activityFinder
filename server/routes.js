const router = require("express").Router();
const authController = require("./controllers/authController");
const publicationController = require("./controllers/publicationController");
const userController = require("./controllers/userController");

router.use("/auth", authController);
router.use("/publications", publicationController);
router.use("/users", userController);


module.exports = router;