'use strict';
import {Model} from 'sequelize';

export default (sequelize, DataTypes) => {

  class User extends Model {};

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (models) => {

  }

  User.beforeCreate = async (user, options)  => {
    if (user.password) {
      const hashedPassword = await bcypt.hash(user.password, 10);
      return user.password_hash = hashedPassword;
    } else {
      throw new Error();
    }
  };

  // Allows to log in with a name(username) or email
  User.findByLogin = async (login) => {
    let user = await User.findOne({
      where: { username: login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }
    return user;
  };

  User.comparePassword = (paswd, cb) => {
    bcypt.compare(paswd, this.password, function (err, isMatch) {
      return err ? cb(err) : cb(null, isMatch);
    });
  }

  return User;
};