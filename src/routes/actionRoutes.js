import express from "express";
import AdminController from "../controllers/users/adminController.js"

const router = express.Router()

const control = AdminController.actionsController

router
    // Actions
    .get("/actions", control.listActions)
    .post("/actions", control.registerAction)
    .put("/actions/:id", control.editAction)
    .delete("/actions/:id", control.deleteAction)
    // Action Methods
    .put("/actions/method/:id", control.addMethod)
    .delete("/actions/method/:id", control.deleteMethod)

export default router