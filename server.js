// Comienzo de requires
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Comienzo de usos
const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

module.exports={app};