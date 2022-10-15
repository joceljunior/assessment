const express = require('express');
const Controller = require('../controllers/QuestionController');

const routes = express.Router();


routes.get('/getQuestions/:id', Controller.getQuestions);
routes.post('/postQuestions', Controller.postQuestions);
routes.put('/updateQuestions', Controller.updateQuestions);


module.exports = routes;