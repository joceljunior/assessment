const Sequelize  = require('sequelize');
const dbConfig = require('../config/database');

const Customer = require('../models/Customer');
const Sector = require('../models/Sector');
const Question = require('../models/TemplateQuestion');
const Evaluation = require('../models/Evaluation');

const connection = new Sequelize(dbConfig);

Customer.init(connection);
Sector.init(connection);
Question.init(connection);
Evaluation.init(connection);

// Sector.associate(connection.models);
Customer.associate(connection.models);
Question.associate(connection.models);


module.exports = connection;