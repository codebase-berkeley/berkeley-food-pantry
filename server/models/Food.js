const { Sequelize, Model, DataTypes } = require("sequelize");

class Food extends Model {}

const initFoodModel = (sequelize) => {
    Food.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true
        },
       
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instock: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_path: {
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
