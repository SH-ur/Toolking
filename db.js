const {Sequelize} = require('sequelize')
const urlModel = require('./Models/Url');
const {PG_USER, PG_PASS, HOST, BDNAME} = process.env;

const db = new Sequelize(`postgres://${PG_USER}:${PG_PASS}@${HOST}/${BDNAME}`,
{
    loggin:false,
    native: false
})

//Para ejecutar
urlModel(db);

module.exports={
    db
}