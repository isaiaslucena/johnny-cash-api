let OrderLogModel;

if (process.env.ENV === 'testing') {
  const dbMock = require('../config/dbMock');
  const orderLogMock = require('../mocks/orderLogMock');

  OrderLogModel = dbMock.define('orderLog', orderLogMock, {timestamps: false});
} else {
  const sequelize = require('../config/db');
  const { DataTypes } = require('sequelize');
  OrderLogModel = sequelize.define('orderLog', {
    time_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skuId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paidInBox: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    tableName: 'JohnnyOrderLog',
    timestamps: false
  });
}

module.exports = OrderLogModel;
