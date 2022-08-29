import mongoose from "mongoose";

const actionSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        // conferir atributo abaixo depois:
        methods: [
            { 
                type: String, required: true 
            }
        ]
    },
    {
        versionKey: false
    }
)

const actions = mongoose.model("actions", actionSchema)

export default actions