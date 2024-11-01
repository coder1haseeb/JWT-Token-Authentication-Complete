const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

() => {
  sequelize
    .sync()
    .then(() => {
      console.log("Database synced in User model successfully");
    })
    .catch((err) => {
      console.log("Database syncing failed in user controller due to ", err);
    });
};
module.exports = User;
