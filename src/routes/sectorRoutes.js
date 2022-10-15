const express = require('express');
const Controller = require('../controllers/SectorController');

const routes = express.Router();


routes.get('/getSector', Controller.getSector);
routes.post('/postSector', Controller.postSector);
routes.put('/updateSector', Controller.updateSector);


module.exports = routes;