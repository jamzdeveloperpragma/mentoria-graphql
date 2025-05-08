import { allUser, allUserAdmin } from "../services/user.service.js"




export default {
    allUsers: allUser,
    allUserAdmin:allUserAdmin
}











// {

//     Query:{
//      allUsers
//    },--> consultas
//     mutation:{}, --> cambios en servicios
//     subscription:{} --> escucha en tiempo real con socket 
// }