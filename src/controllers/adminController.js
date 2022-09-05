import actions from "../models/Action.js";
import classRegistrations from "../models/ClassRegistration.js";
import groupClasses from "../models/GroupClass.js";
import roles from "../models/Role.js";
import subjects from "../models/Subject.js";
// import users from "../models/User.js";

// =================================== GENERAL CRUD ===================================

    // List Model
    async function listModel(req, res, models, populate) {
        try {
            const listModels = await models.find().populate(populate);
            if (listModels) {
                res.json(listModels);
            }
        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Register Model
    async function registerModel(req, res, models) {
        try {
            let model = new models(req.body)

            const newModel = await model.save()

            if (newModel) {
                res.status(201).send({ message: 'Registrado com sucesso.' })
            } else {
                res.status(500).send({ message: `${err.message} - falha ao realizar registro.` });
            }

        } catch (error) {
            res.status(401).send(error);
        }

    }

    // Edit Model
    async function editModel(req, res, models) {
        try {
            const {id} = req.params
            const editCurrentModel = await models.findByIdAndUpdate(id, { $set: req.body })

            if (editCurrentModel) {
                res.status(200).send({ message: 'Atualizado com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Model
    async function deleteModel(req, res, models) {
        try {
            const id = req.params.id
            const deleteCurrentModel = await models.findByIdAndDelete(id)

            if (deleteCurrentModel) {
                res.status(200).send({ message: 'Elemento deletado com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

class AdminController {

    // =================================== ACTIONS ===================================

    // List Actions
    static listActions = async (req, res) => {
        listModel(req, res, actions)
    }

    // Register Action
    static registerAction = async (req, res) => {
        registerModel(req, res, actions)
    }

    // Edit Action
    static editAction = async (req, res) => {
        editModel(req, res, actions)
    }

    // Delete Action
    static deleteAction = async (req, res) => {
        deleteModel(req, res, actions)
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

    // =================================== ROLES ===================================

    // List Roles
    static listRoles = async (req, res) => {
        listModel(req, res, roles, 'actions')
    }

    // Register Role
    static registerRole = async (req, res) => {
        registerModel(req, res, roles)
    }

    // Edit Role
    static editRole = async (req, res) => {
        editModel(req, res, roles)
    }

    // Delete Role
    static deleteRole = async (req, res) => {
        deleteModel(req, res, roles)
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

    // =================================== CLASSES ===================================

    // List Classes

    static listClasses = async (req, res) => {
        listModel(req, res, groupClasses, 'subject')
    }

    // Register Class

    static registerClass = async (req, res) => {
        try {
            let groupClass = new groupClasses(req.body)
            await groupClass.save()
            if (!groupClass) return res.status(401).send({ message: 'Turma não foi registrada' })

            const subject = groupClass.subject
            const newGroupClassId = groupClass._id
            const subjectCollection = await subjects.findById(subject)

            if (!subjectCollection) return res.status(401).send({ message: 'Disciplina não foi encontrada' })

            subjectCollection.groupClasses.push(newGroupClassId)
            await subjectCollection.save()

            res.status(201).send({ message: 'Registrado com sucesso.' })

        } catch (error) {
            res.status(401).send(error);
        }

    }

    // Edit Class
    static editClass = async (req, res) => {
        editModel(req, res, groupClasses)
    }

    // Delete Class
    static deleteClass = async (req, res) => {
        deleteModel(req, res, groupClasses)
    }

    // Add Subject to Class
    static addClassSubject = async (req, res) => {
        try {
            const classId = req.params.id
            const newSubject = req.body.subjects
            const getSubjects = await subjects.findById(newSubject)

            const currentClass = await groupClasses.findById(classId)

            currentClass.subject.push(getSubjects)

            if (currentClass) {
                await currentClass.save()
                res.status(200).send({ message: 'Matéria adicionada com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Subject in a Class

    // =================================== SUBJECTS ===================================

    // List Subjects
    static listSubjects = async (req, res) => {
        listModel(req, res, subjects, 'groupClasses')
    }

    // Register Subject
    static registerSubject = async (req, res) => {
        registerModel(req, res, subjects)
    }

    // Edit Subject
    static editSubject = async (req, res) => {
        editModel(req, res, subjects)
    }

    // Delete Subject
    static deleteSubject = async (req, res) => {
        deleteModel(req, res, subjects)
    }

    // Add Class to Subject
    static addSubjectClass = async (req, res) => {
        try {
            const subjectId = req.params.id
            const newClass = req.body.groupClasses
            const getClasses = await groupClasses.findById(newClass)

            const currentSubject = await subjects.findById(subjectId)

            currentSubject.groupClasses.push(getClasses)

            if (currentSubject) {
                await currentSubject.save()
                res.status(200).send({ message: 'Turma adicionada com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Delete Class in a Subject
    static deleteSubjectClass = async (req, res) => {
        try {
            const subjectId = req.params.id
            const addedClass = req.body.groupClasses
            const getClass = await groupClasses.findById(addedClass)

            const currentSubject = await subjects.findById(subjectId)

            const methodIndex = currentSubject.groupClasses.indexOf(getClass)
            currentSubject.groupClasses.splice(methodIndex, 1)

            if (currentSubject) {
                await currentSubject.save()
                res.status(200).send({ message: 'Turma removida com sucesso.' })
            } else {
                res.status(500).send({ message: err.message })
            }

        } catch (error) {
            res.status(401).send(error);
        }
    }

    // =================================== CLASS REGISTRATION ===================================

    // List Class Registrations
    static listClassRegistrations = async (req, res) => {
        listModel(req, res, classRegistrations)
    }

    // Register Class Registration
    static registerClassRegistration = async (req, res) => {
        registerModel(req, res, classRegistrations)
    }

    // Edit Class Registration
    static editClassRegistration = async (req, res) => {
        editModel(req, res, classRegistrations)
    }

    // Delete Class Registration
    static deleteClassRegistration = async (req, res) => {
        deleteModel(req, res, classRegistrations)
    }

}

export default AdminController