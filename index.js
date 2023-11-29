const app = require('./server');
//const {db} = require('./db');

 const PORT = 3001;

 app.listen(PORT, ()=>{
    console.log(`Servicio levantado en puerto ${PORT}`);
 })