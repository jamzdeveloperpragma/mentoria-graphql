


const typeDefsUser =`#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User{
    _id:ID
    firstName:String
    lastName:String
    }
type Query {

    allUsers:[User]
 }
`

export { typeDefsUser }