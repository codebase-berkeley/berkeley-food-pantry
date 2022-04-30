const cors = require('cors');
const express = require('express');
const { Sequelize } = require('sequelize')
const http = require('http');

const routes = require('./routes');
require('dotenv').config();
const { initFoodModel } = require('./models/Food');
const { initAppointmentModel } = require('./models/Appointment');

const PORT = process.env.PORT;

const app = express();

app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.json());

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
initFoodModel(sequelize);
initAppointmentModel(sequelize);
sequelize.sync();

routes(app);

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
    console.log('Berkeley Food Pantry Server listening on port ' + PORT);
});
