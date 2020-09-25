const { User } = require('../models');

exports.index =  (req , res) => {
     User.findAll()
     .then( users => {
          res.render('page', { users });
     }).catch(err => {
          console.error(err);
     });
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