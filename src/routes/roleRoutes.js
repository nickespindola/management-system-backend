import express from "express";
import AdminController from "../controllers/adminController.js"

const router = express.Router()

router
    // Roles
    .get("/roles", AdminController.listRoles)
    .post("/roles", AdminController.registerRole)
    .put("/roles/:id", AdminController.editRole)
    .delete("/roles/:id", AdminController.deleteRole)
    // Roles Methods
    .put("/roles/action/:id", AdminController.addRoleAction)
    .delete("/roles/action/:id", AdminController.deleteRoleAction)

export default router