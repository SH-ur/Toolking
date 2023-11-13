const app = require('./server');
//const {db} = require('./db');

 
    app.use(3001, ()=>{
        console.log("Inicializando correctamente el puerto " + 3001);
    })    


