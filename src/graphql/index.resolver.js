
import userQueryResolver from "./users/resolvers/query.resolver.js"
import userMutationResolver from "./users/resolvers/mutation.resolver.js"


export default {
    Query: {
      //User Queries
      //sale Queries
      // Book Queries
        ...userQueryResolver,
        // ...salesQueryResolver
    },
    Mutation:{
    //User Mutations
      //sale Mutations
      // Book Mutations
      ...userMutationResolver
    }
}