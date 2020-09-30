'use strict';

module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define('reply', {
    text: {
      type: DataTypes.STRING
    }
  });
  
  return reply;
};