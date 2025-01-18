const sales = [{
    customer: "luis paredes",
    item: "camiseta"
}]



export const allSale = () => {
    return sales
}


export const createSaleService = (context,data) => {
    console.log("🚀 ~ file: sale.service.js:15 ~ createSaleService ~ context:", context)
    
    console.log(data)

    usuarios.push(data)
    console.log(sales)

    return true
}