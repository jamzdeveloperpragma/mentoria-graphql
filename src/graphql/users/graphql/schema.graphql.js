


const typeDefsUser = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


type Query {

    allUsers:[UserSimple]
    allUserAdmin:[User]
}

type Mutation {
  createUser(createUserInput:UserInput):Boolean
}


input UserInput{
firstName:String
lastName:String
age:Int
email:String
password:String
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