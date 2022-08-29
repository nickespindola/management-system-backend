import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Nickfln:1234@cluster0.nufmifk.mongodb.net/ca-backend")

let db = mongoose.connection

export default db