import express from "express";
import AdminController from "../controllers/users/adminController.js"

const router = express.Router()

const control = AdminController.groupClassesController

router
    // Classes
    .get("/classes", control.listClasses)
    .post("/classes", control.registerClass)
    .put("/classes/:id", control.editClass)
    .delete("/classes/:id", control.deleteClass)
    // Add Class Subject
    .put("/classes/subject/:id", control.addClassSubject)

export default router