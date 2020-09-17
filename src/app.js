const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

const routes = require('./routes');
require('./database');

const app = express();

app.use(express.json());

// Body Parser
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.use( ejsLayouts );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );

// static files
app.use(express.static(path.join( __dirname, '..','public')));

// Materialize
app.use(express.static(path.join(__dirname , '..', 'node_modules', 'materialize-css', 'dist')));

// Rotas
app.use(routes);


module.exports = app;