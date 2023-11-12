const {Datatypes, UUIDV4}= require('sequelize');

module.exports = (database)=>{
    database.define('url', {
        id:{
            type: Datatypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        fullUrl: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        shortUrl:{
type: Datatypes.STRING,
allowNull: false,
        },
        modified:{
            type: Datatypes.BOOLEAN,
defaultValue: false
        }
    }, {timestamps: false, paranoid: true})
}