import subjects from "../../models/Subject.js";
import crud from "../CRUD.js";

class SubjectsController {

    // List Subjects
    static listSubjects = async (req, res) => {
        crud.listModel(req, res, subjects, 'groupClasses')
    }

    // Register Subject
    static registerSubject = async (req, res) => {
        crud.registerModel(req, res, subjects)
    }

    // Edit Subject
    static editSubject = async (req, res) => {
        crud.editModel(req, res, subjects)
    }

    // Delete Subject
    static deleteSubject = async (req, res) => {
        crud.deleteModel(req, res, subjects)
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
}

export default SubjectsController