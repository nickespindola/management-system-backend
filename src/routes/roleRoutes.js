import express from "express";
import AdminController from "../controllers/users/adminController.js"

const router = express.Router()

const control = AdminController.rolesController

router
    // Roles
    .get("/roles", control.listRoles)
    .post("/roles", control.registerRole)
    .put("/roles/:id", control.editRole)
    .delete("/roles/:id", control.deleteRole)
    // Roles Methods
    .put("/roles/action/:id", control.addRoleAction)
    .delete("/roles/action/:id", control.deleteRoleAction)

export default router