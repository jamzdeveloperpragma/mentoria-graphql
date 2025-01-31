import { UserModel } from "../entity/user.entity.js"

const usuarios = [{
    firstName: "luis",
    lastName: "paredes"
}]



export const allUser = () => {
    return usuarios
}


export const createUserService =async (context, data) => {
    console.log("🚀 ~ file: user.service.js:15 ~ createUserService ~ context:", context)

console.log(data)
    const newUser =await UserModel.create(data.createUserInput)
 await   newUser.save()
    console.log(data)

    usuarios.push(data)
    console.log(usuarios)

    return true
}