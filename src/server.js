const express = require('express');
const customerRoutes = require('../src/routes/customerRoutes');
const sectorRoutes = require('../src/routes/sectorRoutes');
const questionRoutes = require('../src/routes/questionRoutes');
const evaluationRoutes = require('../src/routes/evaluationRoutes');

require('./database/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(customerRoutes);
app.use(sectorRoutes);
app.use(questionRoutes);
app.use(evaluationRoutes);


app.listen(port, () => {
    console.log();
    console.log("Server Listening port 3000");
});