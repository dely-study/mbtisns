'use strict';
const INFJ = "INFJ";
const ENFJ = "ENFJ";

module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    boardType: {
      type: DataTypes.ENUM([INFJ,ENFJ])
    },
    title: {
      type: DataTypes.STRING
    },
    content_img: {
      type: DataTypes.JSON
    },
    content_text: {
      type: DataTypes.STRING
    },
    like: {
      type: DataTypes.INTEGER
    }
  });
  
  return post;
};