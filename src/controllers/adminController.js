import actions from "../models/Action.js";
// import classRegistration from "../models/ClassRegistration";
// import groupClasses from "../models/GroupClass";
// import roles from "../models/Role";
// import subjects from "../models/Subject";
// import users from "../models/User.js";

class AdminController {

    // =================================== ACTIONS ===================================


    // List Actions
    static listActions = async (req, res) => {
        try {
            const checkAction = await actions.find();
            if (checkAction) {
                res.json(checkAction);
            } else {
                res.status(401).send("Ação inexistente");
            }
            
        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Register Action
    static registerAction = async (req, res) => {
        try {
            let action = new actions(req.body)

            const checkRegistration = await action.save()

            if (checkRegistration) {
                res.status(201).send(checkRegistration.toJSON())
            } else {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar ação.` });
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Edit Action
    static editAction = async (req, res) => {
        try {
            const {id} = req.params
            const checkEdit = await actions.findByIdAndUpdate(id, { $set: req.body })

            if (checkEdit) {
                res.status(200).send({ message: 'Ação atualizada com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Action
    static deleteAction = async (req, res) => {
        try {
            const id = req.params.id
            const checkDeletion = await actions.findByIdAndDelete(id)

            if (checkDeletion) {
                res.status(200).send({ message: 'Ação deletada com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Add Method
    static addMethod = async (req, res) => {
        try {
            const {id} = req.params
            let {method} = new method(req.body)

            const checkAddition = await action.save()

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Method
}

export default AdminController