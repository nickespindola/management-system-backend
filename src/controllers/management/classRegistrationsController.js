import classRegistrations from "../../models/ClassRegistration.js";
import crud from "../CRUD.js";

class ClassRegistrationsController {

    // List Class Registrations
    static listClassRegistrations = async (req, res) => {

        try {
            const listClassRegistrations = await classRegistrations.find().populate('role').populate('groupClass');
            if (listClassRegistrations) {
                res.json(listClassRegistrations);
            }
        } catch (error) {
            res.status(401).send(error);
        }
    }

    // Register Class Registration
    static registerClassRegistration = async (req, res) => {
        crud.registerModel(req, res, classRegistrations)
    }

    // Edit Class Registration
    static editClassRegistration = async (req, res) => {
        crud.editModel(req, res, classRegistrations)
    }

    // Delete Class Registration
    static deleteClassRegistration = async (req, res) => {
        crud.deleteModel(req, res, classRegistrations)
    }
}

export default ClassRegistrationsController