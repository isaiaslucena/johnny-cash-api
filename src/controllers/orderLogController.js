const { Op, Sequelize } = require('sequelize');
const OrderLogModel = require('../models/orderLogModel');
const EmployeeModel = require('../models/employeeModel');
const SkuModel = require('../models/skuModel');
const PaymentLogModel = require('../models/paymentLogModel');

OrderLogModel.belongsTo(EmployeeModel, {foreignKey: 'employeeId' });
OrderLogModel.belongsTo(SkuModel, {foreignKey: 'skuId' });
OrderLogModel.belongsTo(PaymentLogModel, {foreignKey: 'paidInBox' });

const OrderLogController = {
  index: async (req, res) => {
    const orderLog = await OrderLogModel.findAll({
      order: [
        ['time_created', 'asc']
      ]
    });
    return res.json(orderLog);
  },
  dateRange: async (req, res, filters) => {
    const orderLogDateRange = await OrderLogModel.findAll({
      where: {
        time_created: {
          [Op.between]: [`${filters.startDate}T00:00:00Z`, `${filters.endDate}T23:59:59Z`]
        }
      },
      order: [
        ['time_created', 'asc']
      ]
    });
    return res.json(orderLogDateRange);
  },
  topSelling: async (req, res, filters) => {
    const orderLogTopSelling = await OrderLogModel.findAll({
      attributes: ['sku.id', 'sku.name', [Sequelize.fn('sum', Sequelize.col('quantity')), 'total_sold']],
      where: {
        time_created: {
          [Op.between]: [`${filters.startDate}T00:00:00Z`, `${filters.endDate}T23:59:59Z`]
        }
      },
      order: [
        [Sequelize.fn('sum', Sequelize.col('quantity')), 'desc']
      ],
      group: [
        ['skuId']
      ],
      include: SkuModel
    });

    return res.json(orderLogTopSelling);
  }
}

module.exports = OrderLogController;