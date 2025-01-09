


const typeDefsUser =`#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


type Query {

    allUsers:[UserSimple]
    allUserAdmin:[User]
}

type Mutation {
  createUser(firstName:String,lastName:String,age:Int):Boolean
}



type User{
    _id:ID
    firstName:String
    lastName:String
    age:Int
}

type UserSimple {

    firstName:String
    lastName:String
}

`

export { typeDefsUser }