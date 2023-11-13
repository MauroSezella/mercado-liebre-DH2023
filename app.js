const express = require('express');
const path = require('path');
const app = express();

let port = process.env.PORT || 3000;

app.listen(port, () => console.log('Servidor Corriendo'));

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.resolve("./views/home.html")));

app.get('/register',(req,res) => res.sendFile(path.resolve("./views/register.html")));

app.get('/login',(req,res) => res.sendFile(path.resolve("./views/login.html")));

