const { sales } = require("../data");
const { Sales } = require("../models/salesModel");
const { successResponse } = require("./responseController");

const seedSales = async(req, res, next) => {
    try {
        // deleting existing product 
        await Sales.deleteMany({});
        
        // create product  
        const seedSale = await Sales.insertMany(sales)

        successResponse(res,{
            statusCode : 200,
            message : res.message,
            payload : {
                seedSale
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    seedSales
}