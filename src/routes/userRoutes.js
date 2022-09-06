import express from "express";
import AdminController from "../controllers/users/adminController.js";

const router = express.Router()

const control = AdminController.usersController

router
    // Subjects
    .get("/users", control.listUsers)
    .post("/users", control.registerUser)
    .put("/users/:id", control.editUser)
    .delete("/users/:id", control.deleteUser)

export default router