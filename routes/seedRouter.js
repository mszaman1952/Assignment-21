const express = require('express');
const { seedSales } = require('../controller/seedController');
const seedSalary = require('../controller/seedSalaryController');
const seedRouter = express.Router();

seedRouter.post('/seedSale', seedSales);
seedRouter.post('/salary', seedSalary);

module.exports = {seedRouter}