'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configDB from './../database/config/database';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configDB[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(() => console.log('DB connection has been established successfully.'))
  .catch( err => console.error('Unable to connect to the database:', err))


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object
  .keys(db)
  .forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;