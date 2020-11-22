const express = require('express');
const router = express.Router();
const EmployeeControllerIndex = require('../controllers/employeeController');
const OrderLogController = require('../controllers/orderLogController');

router.get('/', (req, res, next) => {
  res.json({ status: 'OK' });
});

router.get('/employee', EmployeeControllerIndex);

router.get('/orderLog/topSelling', (req, res, next) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) return res.json({ message: 'Must have query params startDate and endDate!'}, 500);

  const filters = {
    startDate,
    endDate
  };

  OrderLogController.topSelling(req, res, filters);
});

router.get('/orderLog', (req, res, next) => {
  const { startDate, endDate } = req.query;

  if (startDate && endDate) {
    const filters = {
      startDate,
      endDate
    };
    return OrderLogController.dateRange(req, res, filters);
  }

  OrderLogController.index(req, res);
});

module.exports = router;
