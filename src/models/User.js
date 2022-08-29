import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        cpf: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, unique: true },
        adress: { type: String },
        // preencher referência depois:
        registration: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'classRegistrations' }], unique: true }
    },
    {
        versionKey: false
    }
)

const users = mongoose.model("users", userSchema)

export default users