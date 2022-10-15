const express = require('express');
const Controller = require('../controllers/CustomerController');

const routes = express.Router();


routes.get('/getCustomer', Controller.getCustomer);
routes.get('/getCustomerUrl/:url', Controller.getCustomerUrl);
routes.post('/postCustomer', Controller.postCustomer);
routes.put('/updateCustomer', Controller.updateCustomer);


module.exports = routes;