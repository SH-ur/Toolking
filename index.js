const app = require('./server');
const {db} = require('./db');

 db.sync({alter: true}).then(()=>{
    app.use(3001, ()=>{
        console.log("Inicializando correctamente el puerto " + 3001);
    })    
})
.catch(err=>console.log(err));
