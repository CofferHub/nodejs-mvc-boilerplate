import {User} from "../models";


// Rotas GET
const getLogin =  (req , res) => {
     res.render('page/login', {session: false});
}

const getRegister = (req, res) => {
     res.render('page/register', {session: false});
}

const getIndex = (req, res) => {
     res.render('page');
}

const getAbout = (req, res) => {
     res.render('page/about');
}

const getContact = (req, res) => {
     res.render('page/contact');
}

const getAuth = (req, res) => {
     res.render('page/auth');
}

const getLogout = (req, res) => {
     req.logout();
     res.redirect('/'); // ADD rota depois do logout
}


// Rotas POST
// const postRegister = (req, res) => {
//      const {username, email, password} = req.body;
     
//      User.create({username, email, password})
//           .then((result) => {
//                res.redirect('/auth'); // ADD rota de successo no registro
//           })
//           .catch((err) => { 
//                res.redirect('/register'); // ADD rota de falha no registro
//           });
// }

export default { 
     getLogin, 
     getRegister, 
     getIndex, 
     getAbout, 
     getContact, 
     getAuth, 
     getLogout,
     // postRegister
};