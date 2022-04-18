const { Sequelize, Model, DataTypes } = require("sequelize");

class Appointment extends Model {}

const initAppointmentModel = (sequelize) => {
    Appointment.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
            
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        visited: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        dietary_preferences: {
            type: DataTypes.STRING,
            allowNull: true
        },
        item_preferences: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        }
        
    }, {
        tableName: 'appointment',
        modelName: 'Appointment',
        sequelize
    });
}

module.exports = { Appointment, initAppointmentModel };

