import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        // conferir atributo abaixo depois
        actions: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actions' }], required: true }
    },
    {
        versionKey: false
    }

)

const roles = mongoose.model("roles", roleSchema)

export default roles