const app = require('./server');

app.use(3001, ()=>{
    console.log("Inicializando correctamente el puerto " + 3001);
})