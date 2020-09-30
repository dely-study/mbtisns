'use strict';

module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    message: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  });
  return message;
};