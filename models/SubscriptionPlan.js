const { Sequelize, DataTypes } = require("sequelize");

// Connexion à la base de données MySQL
const sequelize = new Sequelize("paiecash", "root", "Test123456", {
    host: "localhost",
    dialect: "mysql",
});

// Définition du modèle SubscriptionPlan
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

//Ici je Synchronise le modèle avec la base de données (crée la table si elle n'existe pas)
sequelize.sync();

module.exports = SubscriptionPlan;
