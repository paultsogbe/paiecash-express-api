const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database"); // Importer la configuration de la base de données

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importer les modèles et les routes

const subscriptionPlan = require("./routes/subscriptionPlan");
const userRoutes = require("./routes/user");
app.use(subscriptionPlan);
app.use(userRoutes);

// Synchroniser les modèles avec la base de données
sequelize
    .sync()
    .then(() => {
        console.log("Base de données synchronisée");
    })
    .catch((error) => {
        console.error(
            "Erreur lors de la synchronisation de la base de données :",
            error
        );
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
