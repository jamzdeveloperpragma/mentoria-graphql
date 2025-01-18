


const typeDefsSale =`#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.


type Query {

    allSales:[SaleSimple]
    allSaleAdmin:[Sale]
}

type Mutation {
  createSale(customer:String,item:String,amount:Number):Boolean
}



type Sale{
    _id:ID
    customer:String
    item:String
    amount:Number
}

type SaleSimple {

    customer:String
    item:String
}

`

export { typeDefsSale }