'use strict';
const Man = "Man";
const Woman = "Woman";

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.ENUM([Man, Woman])
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    profileImg: {
      type: DataTypes.JSON
    },
    nickname: {
      type: DataTypes.STRING
    },
    mbtiType: {
      type: DataTypes.STRING
    },
    isVerificated: {
      type: DataTypes.BOOLEAN
    }
  });
  
  return user;
};