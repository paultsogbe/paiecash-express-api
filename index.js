const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Import des routes
const subscriptionPlan = require("./routes/subscriptionPlan");
app.use(subscriptionPlan);

// Port d'écoute du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
