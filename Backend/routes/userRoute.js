const express = require("express");
const authController = require("../controller/authController");
const profileController = require("../controller/profileController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetpassword/:token", authController.resetPassword);
router.get("/profile", profileController.userinfo);
module.exports = router;
