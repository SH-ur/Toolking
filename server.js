// Comienzo de requires
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const urlRoutes = require('./Routes/urlRoute');
// Comienzo de usos
const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/url', urlRoutes);



module.exports= app;

