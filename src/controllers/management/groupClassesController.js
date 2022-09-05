import groupClasses from "../../models/GroupClass.js";
import crud from "../CRUD.js";

class GroupClassesController {

    // List Classes
    static listClasses = async (req, res) => {
        crud.listModel(req, res, groupClasses, 'subject')
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
        crud.editModel(req, res, groupClasses)
    }

    // Delete Class
    static deleteClass = async (req, res) => {
        crud.deleteModel(req, res, groupClasses)
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
}

export default GroupClassesController