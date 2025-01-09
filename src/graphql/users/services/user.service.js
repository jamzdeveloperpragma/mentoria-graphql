const usuarios = [{
    firstName: "luis",
    lastName: "paredes"
}]



export const allUser = () => {
    return usuarios
}


export const createUserService = (context,data) => {
    console.log("🚀 ~ file: user.service.js:15 ~ createUserService ~ context:", context)
    
    console.log(data)

    usuarios.push(data)
    console.log(usuarios)

    return true
}