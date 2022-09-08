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
    static loginUser = async (req, res) => {
        try {
            const { cpf, password } = req.body
            const checkUser = await users.find({ cpf: cpf })
            if (!checkUser) return res.status(400).send("Email ou senha inválidos")
            const passwordCheck = bcrypt.compareSync(password, checkUser[0].password)
            if (!passwordCheck) return res.status(400).send("Email ou senha inválidos")

            const payload = { id: checkUser._id, cpf: checkUser.cpf }
            const token = jwt.sign(payload, process.env.SECRET_TOKEN)
            res.header('Authorization', token)
            const userUpdate = await users.findByIdAndUpdate(checkUser._id, {
                authKey: token
            })

            res.status(200).send(userUpdate)

        } catch (error) {
            res.status(400).send("Email ou senha inválidos")
        }
    }
    
}

export default UsersController