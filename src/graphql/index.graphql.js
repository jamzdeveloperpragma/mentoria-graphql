import { AuthGraphqlDef } from "./auth/graphql/schema.graphql.js";
import { typeDefsSale } from "./sales/graphql/schema.graphql.js";
import { typeDefsUser } from "./users/graphql/schema.graphql.js";




export default [typeDefsUser,typeDefsSale, AuthGraphqlDef]