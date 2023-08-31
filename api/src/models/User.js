const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNul: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNul: false,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNul: false,
      },
    },
    { timestamps: false }
  );
};
