let PaymentLogModel;

if (process.env.NODE_ENV === 'testing') {
  const dbMock = require('../config/dbMock');
  const paymentLogMock = require('../mocks/paymentLogMock');

  PaymentLogModel = dbMock.define('sku', paymentLogMock, {timestamps: false});
} else {
  const sequelize = require('../config/db');
  const { DataTypes } = require('sequelize');

  PaymentLogModel = sequelize.define('paymentLog', {
    time_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'JohnnyPaymentLog',
    timestamps: false
  });
}

module.exports = PaymentLogModel;
