import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        cpf: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        password: { type: String, required: true },
        phoneNumber: { type: String, unique: true },
        adress: { type: String, required: true },
        // preencher referência depois:
        registration: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'classRegistration' }], unique: true }
    },
    {
        versionKey: false
    }
)

const users = mongoose.model("users", userSchema)

export default users