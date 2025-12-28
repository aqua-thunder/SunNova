const express = require('express')
const router = express.Router();
const authController = require("../controllers/auth-controller.js")
const authMiddleware = require("../middleware/auth-middleware.js")
router.route("/").get(authController.home)
router.route("/register").post(authController.register) 
router.route("/login").post(authController.login)
router.route("/user").get(authMiddleware, authController.user)
module.exports = router