const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors')

const routes = require('./src/routes')

const app  = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use(cors());

app.use('/api',routes)

app.listen(3001,()=>{

console.log('ON')

})