import express from "express";
import actions from "./adminRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Back-end Sistema de Controle Acadêmico"})
    })

    app.use(
        express.json(),
        actions

    )
}

export default routes