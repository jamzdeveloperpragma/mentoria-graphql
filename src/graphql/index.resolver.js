
import userQueryResolver from "./users/resolvers/query.resolver.js"
import userMutationResolver from "./users/resolvers/mutation.resolver.js"
import saleQueryResolver from "./sales/resolvers/query.resolver.js"
import saleMutationResolver from "./sales/resolvers/mutation.resolver.js"
import authQueryResolver from "./auth/resolvers/query.resolver.js"


export default {
    Query: {
      // Book Queries
        ...userQueryResolver,
        ...saleQueryResolver,
        ...authQueryResolver,
    },
    Mutation:{
      // Book Mutations
      ...userMutationResolver,
      ...saleMutationResolver
    }
}