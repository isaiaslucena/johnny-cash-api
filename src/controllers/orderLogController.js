const { Op } = require('sequelize');
const OrderLogController = require('../models/orderLogModel');

const orderLogController = {
  index: async (req, res) => {
    const orderLog = await OrderLogController.findAll({
      order: [
        ['time_created', 'asc']
      ]
    });
    return res.json(orderLog);
  },
  dateRange: async (req, res, filters) => {
    const paymentLogDateRange = await OrderLogController.findAll({
      where: {
        time_created: {
          [Op.between]: [`${filters.startDate} 00:00:00`, `${filters.endDate} 23:59:59`]
        }
      },
      order: [
        ['time_created', 'asc']
      ]
    });
    return res.json(paymentLogDateRange);
  }
}

module.exports = orderLogController;