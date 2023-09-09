const createError = require("http-errors");
const { successResponse } = require("./responseController");
const Salary = require("../models/salaryModel");

// create salary expense 
const salaryExpanse = async (req, res, next) => {
    try {
        const reqBody = req.body;
        const expenseSalary = await Salary.create(reqBody);

        successResponse(res, {
            statusCode : 200,
            message : "Salary Expenses Created...",
            payload : {
                expenseSalary
            }
        })
    } catch (error) {
        next(createError(404, "Route Not Found"))
        throw error;
    }
}

// department salary expense 
const departmentSalaryExpense = async(req, res,next) => {
    try {
        const departmentExpenses = await Salary.aggregate([
            {
              $group: {
                _id: '$department', 
                totalSalaryExpense: { $sum: '$salary' } 
              }
            },
            {
              $project: {
                department: '$_id', 
                totalSalaryExpense: 1,
                _id: 0
              }
            }
          ]);
          successResponse(res, {
            statusCode : 200,
            message : "Department Salary Expense",
            payload : {
                departmentExpenses
            }
          })
    } catch (error) {
        next(createError(404, "Route Not Found..."))
        throw error;
    }
}

module.exports = { salaryExpanse, departmentSalaryExpense };