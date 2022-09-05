import roles from "../../models/Role.js";
import crud from "../CRUD.js";

class RolesController {

    // List Roles
    static listRoles = async (req, res) => {
        crud.listModel(req, res, roles, 'actions')
    }

    // Register Role
    static registerRole = async (req, res) => {
        crud.registerModel(req, res, roles)
    }

    // Edit Role
    static editRole = async (req, res) => {
        crud.editModel(req, res, roles)
    }

    // Delete Role
    static deleteRole = async (req, res) => {
        crud.deleteModel(req, res, roles)
    }

    // Add Action in Role
    static addRoleAction = async (req, res) => {
        try {
            const roleId = req.params.id
            const newAction = req.body.actions
            const getActions = await actions.findById(newAction)

            const currentRole = await roles.findById(roleId)

            currentRole.actions.push(getActions)

            if (currentRole) {
                await currentRole.save()
                res.status(200).send({ message: 'Ação adicionada com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Action in Role
    static deleteRoleAction = async (req, res) => {
        try {
            const roleId = req.params.id
            const addedAction = req.body.actions
            const getAction = await actions.findById(addedAction)

            const currentRole = await roles.findById(roleId)

            const methodIndex = currentRole.actions.indexOf(getAction)
            currentRole.actions.splice(methodIndex, 1)

            if (currentRole) {
                await currentRole.save()
                res.status(200).send({ message: 'Ação removida com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

}

export default RolesController