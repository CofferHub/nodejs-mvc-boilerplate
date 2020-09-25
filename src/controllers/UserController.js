const { User } = require('../models');

exports.index =  (req , res) => {
     User.findAll()
     .then( users => {
          res.render('index', { users });
     }).catch(err => {
          console.error(err);
     });
}

exports.show = (req, res) => {
     const { id } = req.params; 
     User.findOne({ 
          where: {id}
     }).then( users => {
          res.render('update', { users });
     }).catch(err => {
          console.error(err);
     });
}

exports.store = (req , res) => { 
     User.cerate(req.body)
     .then( user => {
          res.render('index', { user });
     }).catch(err => {
          console.error(err);
     });

}

exports.update = (req , res) => { 
     const { id } = req.params; 
     User.update(req.body, {
          where: { id }
     }).then( user => {
          res.render('index', { user });
     }).catch(err => {
          console.error(err);
     });
}

exports.delete = (req , res) => {
     const { id } = req.params; 
     User.destroy({
          where: { id }
     }).then( user => {
          res.render('index');
     }).catch(err => {
          console.error(err);
     });
}