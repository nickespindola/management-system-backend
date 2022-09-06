import express from "express";
import actions from "./actionRoutes.js";
import roles from "./roleRoutes.js";
import classes from "./classRoutes.js";
import subjects from "./subjectRoutes.js";
import classRegistrations from "./classRegistrationRoutes.js";
import users from "./userRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Back-end Sistema de Controle Acadêmico"})
    })

    app.use(
        express.json(),
        actions,
        roles,
        classes,
        subjects,
        classRegistrations,
        users

    )
}

export default routes