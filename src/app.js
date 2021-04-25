'use strict';
// Import Models[node_modules]
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import passport from 'passport';
import mogran from 'morgan';

// Import Models[pastas]
import passportConfig from './config/passport';
import routes from './routes';
class App {

     constructor() {
          this.app = express();

          this.middlewares();
          this.service();
          this.engine();
          this.statics();
          this.routes();
     }

     middlewares() {
          this.app.use(express.json());
          this.app.use(mogran('dev'));
          this.app.use(session({
               secret: process.env.SESSION_SECRET_KEY,
               resave: true,
               saveUninitialized: true,	
          }));
     }

     service() {
          passportConfig(passport);
          this.app.use(passport.initialize());
          this.app.use(passport.session());
     }

     engine() {
          this.app.use(ejsLayouts);
          this.app.set('views', path.join( __dirname, 'views'));
          this.app.set('view engine', 'ejs');
     }

     statics() {   
          this.app.use(express.static(path.join( __dirname, '..','public')));
          this.app.use(express.static(path.join(__dirname , '..', 'node_modules', 'materialize-css', 'dist')));
     }

     routes() {
          this.app.use(routes);
     }
}

export default new App().app;