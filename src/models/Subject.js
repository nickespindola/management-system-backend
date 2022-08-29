import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        workLoad: { type: Number, required: true },
        studyProgram: { type: String, required: true },
        // verificar depois:
        groupClasses: { type: mongoose.Schema.Types.ObjectId }
    }
)

const subjects = mongoose.model("subjects", subjectSchema)

export default subjects