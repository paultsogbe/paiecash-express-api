// models/SubscriptionPlan.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const SubscriptionPlan = sequelize.define("SubscriptionPlan", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Establishing an association between User and SubscriptionPlan

// SubscriptionPlan.belongsTo(User, { foreignKey: { allowNull: false } });
// User.hasMany(SubscriptionPlan);

//Ici je Synchronise le modèle avec la base de données (crée la table si elle n'existe pas)
sequelize.sync();
module.exports = SubscriptionPlan;
