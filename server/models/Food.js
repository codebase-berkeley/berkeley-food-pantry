const { Sequelize, Model, DataTypes } = require("sequelize");

class Food extends Model {}

const initFoodModel = (sequelize) => {
    Food.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'food',
        modelName: 'Food',
        sequelize
    });
}

module.exports = { Food, initFoodModel };
