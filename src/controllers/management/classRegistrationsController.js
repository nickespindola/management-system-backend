import classRegistrations from "../../models/ClassRegistration.js";
import crud from "../CRUD.js";

class ClassRegistrationsController {

    // List Class Registrations
    static listClassRegistrations = async (req, res) => {
        crud.listModel(req, res, classRegistrations)
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