/**
 * Created by pjpandey on 7/24/2017.
 */
const express = require('express');
const bodyParser = require('body-parser');

/*
 * init app
 * */
const app = express();


 /*
 * app module export
 * */

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

/*
 * require router
 * */

require('./server/like/router')(app);
require('./server/contact/router')(app);

const port =  process.env.PORT ||3000;
app.listen(port);
console.log("Listening on port: " + port);