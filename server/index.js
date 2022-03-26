require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const corse = require('cors');
const router = require('./routes/index');

//middleware хендлер для обработки ошибок
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(corse());
app.use(express.json());
app.use('/api', router);

//Обработка ошибок всегда идёт в конце
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () =>
      console.log(`Server is running on PORT ${PORT}....`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
