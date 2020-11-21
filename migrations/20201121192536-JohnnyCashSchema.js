'use strict';

const { NOW } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'JohnnyEmployee',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
      },
      {
        engine: 'InnoDB',
        charset: 'utf8',
      }
    );

    queryInterface.createTable(
      'JohnnySku',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
      },
      {
        engine: 'InnoDB',
        charset: 'utf8',
      }
    );

    queryInterface.createTable(
      'JohnnyOrderLog',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        time_created: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        employeeId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        skuId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        totalPrice: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        paidInBox: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
      },
      {
        engine: 'InnoDB',
        charset: 'utf8',
      }
    );

    queryInterface.createTable(
      'JohnnyPaymentLog',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        time_created: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        employeeId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        amount: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
      },
      {
        engine: 'InnoDB',
        charset: 'utf8',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropAllTables();
  }
};
