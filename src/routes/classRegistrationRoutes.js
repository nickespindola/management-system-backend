import express from "express";
import AdminController from "../controllers/adminController.js"

const router = express.Router()

router
    // Class Registrations
    .get("/classRegistration", AdminController.listClassRegistrations)
    .post("/classRegistration", AdminController.registerClassRegistration)
    .put("/classRegistration/:id", AdminController.editClassRegistration)
    .delete("/classRegistration/:id", AdminController.deleteClassRegistration)

export default router