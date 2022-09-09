import users from "../../models/User.js";
import crud from "../CRUD.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
class UsersController {

    // List Users
    static listUsers = async (req, res) => {
        crud.listModel(req, res, users, 'registration')
    }

    // Register User
    static registerUser = async (req, res) => {
        // crud.registerModel(req, res, users)
        try {
            let user = new users(req.body)
            const salt = bcrypt.genSaltSync()
            user.password = bcrypt.hashSync(user.password, salt)
            const newUser = await user.save()
    
            if (newUser) {
                res.status(201).send({ message: 'Registrado com sucesso.' })
            } else {
                res.status(500).send({ message: `${err.message} - falha ao realizar registro.` });
            }
    
        } catch (error) {
            res.status(401).send(error);
        }
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

            const checkUser = await users.findOne({ cpf: cpf })
            if (!checkUser) return res.status(400).send("CPF ou senha inválidos")

            const passwordCheck = bcrypt.compareSync(password, checkUser.password)
            console.log(passwordCheck);
            if (!passwordCheck) return res.status(400).send("Erro na senha")
            
            function createTokenJWT(checkUser) {
                const payload = { id: checkUser._id, cpf: checkUser.cpf }
                const token = jwt.sign(payload, process.env.SECRET_TOKEN)
                return token
            }

            const token = createTokenJWT(req)
            console.log(token);

            res.header('Authorization', token)
            const userUpdate = await users.findByIdAndUpdate(checkUser._id, {
                authKey: token
            })

            res.status(200).send(userUpdate)

        } catch (error) {
            res.status(400).send("Ocorreu um erro")
        }
    }

}

export default UsersController
