require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.conectionString).then(()=>{
    console.log('Base de dados rodando! ;)');
    app.emit('CodOne')
}).catch(e=>console.log(e));
const routes = require('./routes');
const path = require('path');
const middewareGlobal = require('./src/middlewares/middleware.js')
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(middewareGlobal);
app.use(routes);
app.on('CodOne', ()=>{
    app.listen(4000, ()=>{
        console.log('Estou rodando no: http://localhost:4000')
    })
})
