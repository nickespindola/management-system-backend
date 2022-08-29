import express from "express";

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Back-end Sistema de Controle Acadêmico"})
    })

    app.use(
        express.json(),
        
    )
}

export default routes