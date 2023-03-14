const Sequelize  = require('sequelize');
const dbConfig = require('../config/database');

const Customer = require('../models/Customer');
const Sector = require('../models/Sector');
const Question = require('../models/TemplateQuestion');
const Evaluation = require('../models/Evaluation');
const Session = require('../models/Session');
const TemplateOption = require('../models/TemplateOption');
const EvaluationOption = require('../models/EvaluationOption');

const connection = new Sequelize(dbConfig);

Customer.init(connection);
Sector.init(connection);
Question.init(connection);
Evaluation.init(connection);
TemplateOption.init(connection);
Session.init(connection);
EvaluationOption(connection);

// Sector.associate(connection.models);
Customer.associate(connection.models);
Question.associate(connection.models);
TemplateOption.associate(connection.models);

// create migration
// npx sequelize-cli migration:generate --name session
// running migration
// npx sequelize-cli db:migrate
module.exports = connection;