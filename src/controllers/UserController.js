const { User } = require('../models');

exports.index = (request, response) => {
  User.findAll()
    .then((users) => {
      response.render('page', { users });
    }).catch((error) => {
      console.error(error);
    });
};

exports.view = (request, response) => {
  const { id } = request.params;
  User.findOne({
    where: { id },
  }).then((users) => {
    response.render('page/view', { users });
  }).catch((error) => {
    console.error(error);
  });
};

exports.viewUpdate = (request, response) => {
  const { id } = request.params;
  User.findOne({
    where: { id },
  }).then((users) => {
    response.render('page/update', { users });
  }).catch((error) => {
    console.error(error);
  });
};

exports.create = (request, response) => {
  User.cerate(request.body)
    .then((user) => {
      response.render('page', { user });
    }).catch((error) => {
      console.error(error);
    });
};

exports.update = (request, response) => {
  const { id } = request.params;
  User.update(request.body, {
    where: { id },
  }).then((user) => {
    response.render('page', { user });
  }).catch((error) => {
    console.error(error);
  });
};

exports.delete = (request, response) => {
  const { id } = request.params;
  User.destroy({
    where: { id },
  }).then(() => {
    response.render('page');
  }).catch((error) => {
    console.error(error);
  });
};
