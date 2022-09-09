import express from "express";
import AdminController from "../controllers/users/adminController.js";

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

export default router