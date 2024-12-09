const express = require("express")
const { createHandler } = require("graphql-http/lib/use/express")
const { buildSchema } = require("graphql")



const schema = buildSchema(`
    type Query {
      hello: String
      datos:[String]
      personas:[Persona]
    }

    type Persona{
    nombre:String
    apellido:String
    phoneNumber:String
    age:Int
    address:String
    }
`)



const root = {
    hello() {
        return "Hello world!"
    },
    datos() {
        // logica
        // const usuarios = userModel.find()
        //[{},{}]
        return ["juan", "maria", "rodrigo"]
    },
    personas() {
        // const datos = userModel.find()

        const datos = [{
            nombre: "jose",
            apellido: "Montenegro",
            phoneNumber: "917204652",
            age: 24,
            password: "jufjjfeoi",
            address: "peru"
        }, {
            nombre: "Maria",
            apellido: "lopez",
            phoneNumber: "917204652",
            age: 30,
            password: "dnfaknfda",
            address: "peru"
        }]

        return datos;
    }
}

const app = express()

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)



app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")