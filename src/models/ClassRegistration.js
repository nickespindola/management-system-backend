import mongoose from "mongoose";

const classRegistrationSchema = new mongoose.Schema(
    {
        // verificar depois:
        role: { type: mongoose.Schema.Types.ObjectId, ref: 'roles', required: true },
        // verificar depois:
        groupClass: { type: mongoose.Schema.Types.ObjectId, ref: 'turmas', required: true },
        finalGrade: { type: Number },
        attendance: { type: Number }
    }
)

const classRegistration = mongoose.model("classRegistration", classRegistrationSchema)

export default classRegistration