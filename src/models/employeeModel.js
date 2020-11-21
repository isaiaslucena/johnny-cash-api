let EmployeeModel;

if (process.env.NODE_ENV === 'testing') {
  const dbMock = require('../config/dbMock');
  const employeeMock = require('../mocks/employeeMock');

  EmployeeModel = dbMock.define('employee', employeeMock, {timestamps: false});
} else {
  const sequelize = require('../config/db');
  const { DataTypes } = require('sequelize');

  EmployeeModel = sequelize.define('employee', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'JohnnyEmployee',
    timestamps: false
  });
}

module.exports = EmployeeModel;
