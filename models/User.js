// models/User.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const SubscriptionPlan = require("./SubscriptionPlan");

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

//Ici je Synchronise le modèle avec la base de données (crée la table si elle n'existe pas)
sequelize.sync();
// User.hasMany(SubscriptionPlan); // Defines a one-to-many relationship from Users to SubscriptionPlans
module.exports = User;
