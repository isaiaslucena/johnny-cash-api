let skuModel;

if (process.env.NODE_ENV === 'testing') {
  const dbMock = require('../config/dbMock');
  const skuMock = require('../mocks/skuMock');

  skuModel = dbMock.define('sku', skuMock, {timestamps: false});
} else {
  const sequelize = require('../config/db');
  const { DataTypes } = require('sequelize');

  skuModel = sequelize.define('sku', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    tableName: 'JohnnySku',
    timestamps: false
  });
}

module.exports = skuModel;
