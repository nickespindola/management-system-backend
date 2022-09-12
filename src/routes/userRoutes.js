import express from "express";
import AdminController from "../controllers/users/adminController.js";
import auth from '../controllers/management/authController.js'

const router = express.Router()

const control = AdminController.usersController

router
    // Users
    .get("/users", control.listUsers)
    .post("/users", control.registerUser)
    .put("/users/:id", control.editUser)
    .delete("/users/:id", control.deleteUser)
    // Login
    .post("/users/login", control.loginUser)
    // Logout
    .get("/users/logout", auth, control.logoutUser)

export default router