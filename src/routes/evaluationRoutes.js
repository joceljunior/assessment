const express = require('express');
const Controller = require('../controllers/EvaluationController');

const routes = express.Router();


routes.post('/postEvaluation', Controller.postEvaluation);


module.exports = routes;