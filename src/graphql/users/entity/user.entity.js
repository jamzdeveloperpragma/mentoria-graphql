import mongoose from "../../config/db/mongoose.db.js";



const UserSchema = mongoose.Schema({
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    age: Number
})


const UserModel = mongoose.model('User', UserSchema)
export { UserModel }