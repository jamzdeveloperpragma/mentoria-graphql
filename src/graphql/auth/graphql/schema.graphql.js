const AuthGraphqlDef = `
type Query{

login(email:String!, password:String!):AuthLogin
}


type AuthLogin {
user:UserSimple
accessToken:String
}

`;

export { AuthGraphqlDef };
