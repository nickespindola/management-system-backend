import express from "express";
import AdminController from "../controllers/users/adminController.js"

const router = express.Router()

const control = AdminController.subjectsController

router
    // Subjects
    .get("/subjects", control.listSubjects)
    .post("/subjects", control.registerSubject)
    .put("/subjects/:id", control.editSubject)
    .delete("/subjects/:id", control.deleteSubject)
    // Add Subject Class
    .put("/subjects/classes/:id", control.addSubjectClass)
    .delete("/subjects/classes/:id", control.deleteSubjectClass)

export default router