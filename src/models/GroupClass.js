import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        seats: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        // verificar depois:
        registrations: { type: [{type: mongoose.Schema.Types.ObjectId}] , required: true },
        // verificar depois:
        subject: { type: mongoose.Schema.Types.ObjectId, ref: 'subjects', required: true }
    },
    {
        versionKey: false
    }
)

const groupClasses = mongoose.model("groupClasses", classSchema )

export default groupClasses