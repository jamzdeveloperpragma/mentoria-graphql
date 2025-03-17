import { UserModel } from "../entity/user.entity.js"
import CryptoJS from "crypto-js"


export const allUser = async (_, args, context) => {
    console.log("🚀 ~ allUser ~ args:", args)
    console.log("🚀 ~ allUser ~ context:", context)
    
    const usuarios = await UserModel.find({});
    return usuarios
}


export const createUserService = async (_, data,context) => {
    console.log("🚀 ~ file: user.service.js:15 ~ createUserService ~ context:", context)

    //logica de negocios, para validar.
    const { password } = data.createUserInput;

    const hashPassword = CryptoJS.SHA256(password).toString()
    console.log("🚀 ~ createUserService ~ hashPassword:", hashPassword)


    console.log(data.createUserInput)
    const newUser = await UserModel.create({ ...data.createUserInput, password: hashPassword })
    await newUser.save()


    return true
}