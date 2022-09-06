import users from "../../models/User.js";
import crud from "../CRUD.js";

class UsersController {

    // List Users
    static listUsers = async (req, res) => {
        crud.listModel(req, res, users, 'registration')
    }

    // Register User
    static registerUser = async (req, res) => {
        crud.registerModel(req, res, users)
    }

    // Edit User
    static editUser = async (req, res) => {
        crud.editModel(req, res, users)
    }

    // Delete User
    static deleteUser = async (req, res) => {
        crud.deleteModel(req, res, users)
    }

    // Login

}

export default UsersController