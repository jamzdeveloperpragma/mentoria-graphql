
import userQueryResolver from "./users/resolvers/query.resolver.js"
import userMutationResolver from "./users/resolvers/mutation.resolver.js"
import saleQueryResolver from "./sales/resolvers/query.resolver.js"
import saleMutationResolver from "./sales/resolvers/mutation.resolver.js"


export default {
    Query: {
      // Book Queries
        ...userQueryResolver,
        ...saleQueryResolver
    },
    Mutation:{
      // Book Mutations
      ...userMutationResolver
      ...saleMutationResolver
    }
}