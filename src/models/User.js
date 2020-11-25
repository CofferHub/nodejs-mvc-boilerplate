'use strict';
import {Model} from 'sequelize';
import crypto from "crypto";

export default (sequelize, DataTypes) => {

  class User extends Model {};

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: ''} // ADD mensagem de erro
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: ''} // ADD mensagem de erro
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: ''} // ADD mensagem de erro
      }
    },
    password_key: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {msg: ''} // ADD mensagem de erro
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (models) => { /** define association here */ }

  User.beforeCreate(async (user, options)  => {
    const saltHash = await crypto.randomBytes(32).toString();
    const hashPassword = await crypto.pbkdf2Sync(user.password, saltHash, 10000, 64, 'sha512').toString('hex');
    user.password = hashPassword;
    user.password_key = saltHash;
  });
  
  User.comparePassword = async (password, user) => {
    const hashVerify = await crypto.pbkdf2Sync(password, user.password_key, 10000, 64, 'sha512').toString('hex');
    return user.password_hash === hashVerify;
  }

  return User;
};