


const typeDefsSale =`#graphql


type Query {

    allSales:[SaleSimple]
    allSaleAdmin:[Sale]
}

type Mutation {
  createSale(customer:String,item:String,amount:Float):Boolean
}


type Sale{
    _id:ID
    customer:String #TODO: crear el modelo customer y hacer match
    item:String
    amount:Float
}

type SaleSimple {

    customer:String
    item:String
}

`

export { typeDefsSale }