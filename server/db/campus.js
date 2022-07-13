const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://yt3.ggpht.com/ytc/AKedOLSHqHJ6yWx-5-D0eVh7I1YXUmNOlP7aVYutQ6DS=s900-c-k-c0x00ffffff-no-rj',
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});
