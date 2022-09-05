import express from "express";
import AdminController from "../controllers/adminController.js"

const router = express.Router()

router
    // Subjects
    .get("/subjects", AdminController.listSubjects)
    .post("/subjects", AdminController.registerSubject)
    .put("/subjects/:id", AdminController.editSubject)
    .delete("/subjects/:id", AdminController.deleteSubject)
    // Add Subject Class
    .put("/subjects/classes/:id", AdminController.addSubjectClass)
    .delete("/subjects/classes/:id", AdminController.deleteSubjectClass)

export default router