import express from "express";
import AdminController from "../controllers/users/adminController.js"

const router = express.Router()

const control = AdminController.classRegistrationsController

router
    // Class Registrations
    .get("/classRegistration", control.listClassRegistrations)
    .post("/classRegistration", control.registerClassRegistration)
    .put("/classRegistration/:id", control.editClassRegistration)
    .delete("/classRegistration/:id", control.deleteClassRegistration)

export default router