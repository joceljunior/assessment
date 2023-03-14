const express = require('express');
const Controller = require('../controllers/EvaluationController');

const routes = express.Router();


routes.post('/postEvaluation', Controller.postEvaluation);
routes.post('/postOption', Controller.postOption);


module.exports = routes;