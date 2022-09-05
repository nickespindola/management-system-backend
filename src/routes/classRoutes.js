import express from "express";
import AdminController from "../controllers/adminController.js"

const router = express.Router()

router
    // Classes
    .get("/classes", AdminController.listClasses)
    .post("/classes", AdminController.registerClass)
    .put("/classes/:id", AdminController.editClass)
    .delete("/classes/:id", AdminController.deleteClass)
    // Add Class Subject
    .put("/classes/subject/:id", AdminController.addClassSubject)

export default router