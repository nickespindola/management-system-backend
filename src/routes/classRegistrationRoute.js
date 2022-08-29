import express from "express";
import ClassRegistrationController from "../controllers/classRegistrationController.js"

const router = express.Router()

router
    .get("/classRegistrations", ClassRegistrationController.listClassRegistration)

export default router    