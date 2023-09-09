const {Schema, model} = require('mongoose');

const salarySchem = new Schema({
    department: {type : String},
    employeeName: {type : String},
    salary: {type : Number},
}, {versionKey : false, timestamps : true})

const Salary = model("Salary", salarySchem);

module.exports = Salary;