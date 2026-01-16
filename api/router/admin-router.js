const express = require('express');
const { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById } = require('../controllers/admin-contoller.js');
const authMiddleware = require("../middleware/auth-middleware.js");
const adminMiddleware = require('../middleware/admin-middleware.js');
const router = express.Router();

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById)
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserById);
// router.route("/contacts").get(authMiddleware, addminMiddleware, getAllContacts);
// router.route("/contacts/delete/:id").delete(authMiddleware, addminMiddleware, deleteContactById)
module.exports = router