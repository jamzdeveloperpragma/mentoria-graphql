import { allUser } from "../services/user.service.js"




export default {
    allUsers: allUser,
    allUserAdmin:allUser
}











// {

//     Query:{
//      allUsers
//    },--> consultas
//     mutation:{}, --> cambios en servicios
//     subscription:{} --> escucha en tiempo real con socket 
// }