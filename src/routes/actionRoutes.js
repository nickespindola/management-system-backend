import express from "express";
import AdminController from "../controllers/adminController.js"

const router = express.Router()

router
    // Actions
    .get("/actions", AdminController.listActions)
    .post("/actions", AdminController.registerAction)
    .put("/actions/:id", AdminController.editAction)
    .delete("/actions/:id", AdminController.deleteAction)
    // Action Methods
    .put("/actions/method/:id", AdminController.addMethod)
    .delete("/actions/method/:id", AdminController.deleteMethod)

export default router