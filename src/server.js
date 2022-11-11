const express = require('express');
const cors = require('cors');
const customerRoutes = require('../src/routes/customerRoutes');
const sectorRoutes = require('../src/routes/sectorRoutes');
const questionRoutes = require('../src/routes/questionRoutes');
const evaluationRoutes = require('../src/routes/evaluationRoutes');

require('./database/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(customerRoutes);
app.use(sectorRoutes);
app.use(questionRoutes);
app.use(evaluationRoutes);
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });


app.listen(port, () => {
    console.log();
    console.log("Server Listening port 3000");
});