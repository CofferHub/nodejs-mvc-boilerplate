'use strict';
import passport from 'passport';

const isAuthenticated = (req, res, next) => {
     if (req.isAuthenticated()) return next();
     return res.redirect('/login'); // ADD rota de retorno caso não autenticado
}
 
const isNotAuthenticated = (req, res, next) => {
     if (!req.isAuthenticated()) return next();
     return res.redirect('/auth'); // ADD rota de retorno caso não autenticado
}
 
const authenticateLogin = passport.authenticate('local-login' , {
     successRedirect: '/auth', // ADD rota de successo no login
     failureRedirect: '/login', // ADD rota de falha no login
});

const authenticateRegister = passport.authenticate('local-register', {
     successRedirect: '/auth', // ADD rota de successo no register
     failureRedirect: '/register', // ADD rota de falha no register
});

export { 
     isAuthenticated, 
     isNotAuthenticated, 
     authenticateLogin, 
     authenticateRegister 
};