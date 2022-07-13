const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://yt3.ggpht.com/ytc/AKedOLSHqHJ6yWx-5-D0eVh7I1YXUmNOlP7aVYutQ6DS=s176-c-k-c0x00ffffff-no-rj',
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },
});
