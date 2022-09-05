import actions from "../../models/Action.js";
import crud from "../CRUD.js";

class ActionsController {

    // List Actions
    static listActions = async (req, res) => {
        crud.listModel(req, res, actions)
    }

    // Register Action
    static registerAction = async (req, res) => {
        crud.registerModel(req, res, actions)
    }

    // Edit Action
    static editAction = async (req, res) => {
        crud.editModel(req, res, actions)
    }

    // Delete Action
    static deleteAction = async (req, res) => {
        crud.deleteModel(req, res, actions)
    }

    // Add Method in Action
    static addMethod = async (req, res) => {
        try {
            const id = req.params.id
            const newMethod = req.body.methods

            const currentAction = await actions.findById(id)
            currentAction.methods.push(newMethod)

            if (currentAction) {
                await currentAction.save()
                res.status(200).send({ message: 'Método adicionado com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Method in Action
    static deleteMethod = async (req, res) => {
        try {
            const { id } = req.params
            const addedMethod = req.body.methods

            const currentAction = await actions.findById(id)
            const methodIndex = currentAction.methods.indexOf(addedMethod)
            currentAction.methods.splice(methodIndex, 1)

            if (currentAction) {
                await currentAction.save()
                res.status(200).send({ message: 'Método removido com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

}

export default ActionsController