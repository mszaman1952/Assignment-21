const Salary = require("../models/salaryModel")
const { salaryData } = require('../data');
const { successResponse } = require("./responseController");
const createError = require("http-errors");

const seedSalary = async(req,res, next) => {
    try {
        // delete existing salary 
        await Salary.deleteMany({});

        // create salary 
        const salary = await Salary.create(salaryData);

        successResponse(res,  {
            statusCode : 200,
            message : "Seed Salary Created...",
            payload : {
                salary
            }
        })

    } catch (error) {
        next(createError(404, "Route Not Found"))
        throw error;
    }
}

module.exports = seedSalary;
