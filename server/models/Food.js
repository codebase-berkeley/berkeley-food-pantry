const { Sequelize, Model, DataTypes, STRING, DATE } = require('sequelize');

class Food extends Model {}

const initFoodModel = (sequelize) => {
  Food.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: 'food',
      modelName: 'Food',
      sequelize,
    }
  );
};

module.exports = { Food, initFoodModel };
