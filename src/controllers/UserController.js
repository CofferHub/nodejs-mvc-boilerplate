import { User } from "../models";

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


exports.view = (req, res) => {
     const { id } = req.params; 
     User.findOne({ 
          where: {id}
     }).then( users => {
          res.render('page/view', { users });
     }).catch(err => {
          console.error(err);
     });
}

exports.viewUpdate = (req, res) => {
     const { id } = req.params; 
     User.findOne({ 
          where: {id}
     }).then( users => {
          res.render('page/update', { users });
     }).catch(err => {
          console.error(err);
     });
}

exports.create = (req , res) => { 
     User.cerate(req.body)
     .then( user => {
          res.render('page', { user });
     }).catch(err => {
          console.error(err);
     });
}

exports.update = (req , res) => { 
     const { id } = req.params; 
     User.update(req.body, {
          where: { id }
     }).then( user => {
          res.render('page', { user });
     }).catch(err => {
          console.error(err);
     });
}

exports.delete = (req , res) => {
     const { id } = req.params; 
     User.destroy({
          where: { id }
     }).then( user => {
          res.render('page');
     }).catch(err => {
          console.error(err);
     });
}

export default { getLogin, getRegister, getIndex, getAbout, getContact }