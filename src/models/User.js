'use strict';
import {Model} from 'sequelize';
import crypto from "crypto";

export default (sequelize, DataTypes) => {

  class User extends Model {};

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    password_key: DataTypes.STRING
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
    console.log('\n\n\n\n tt \n\n\n\n');
    const hashVerify = await crypto.pbkdf2Sync(password, user.password_key, 10000, 64, 'sha512').toString('hex');
    return user.password_hash === hashVerify;
  }

  return User;
};