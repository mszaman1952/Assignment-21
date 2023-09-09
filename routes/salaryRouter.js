const express = require('express');
const { salaryExpanse, departmentSalaryExpense }= require('../controller/salaryController');
const salaryRouter = express();

salaryRouter.post("/salaryExpense", salaryExpanse); 
salaryRouter.get('/department-salary-expense', departmentSalaryExpense)

module.exports = salaryRouter;