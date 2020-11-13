import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import mogran from 'morgan';

import routes from './routes';

const app = express();

app.use(express.json());

app.use(mogran('dev'));

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

export default app;