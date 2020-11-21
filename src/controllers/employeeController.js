const employeeModel = require('../models/employeeModel');

const index = async (req, res) => {
  const employee = await employeeModel.findAll();
  return res.json(employee);
}

module.exports = index;