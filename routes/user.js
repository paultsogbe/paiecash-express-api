// routes/user.js
const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");

// Route pour l'inscription (sign-up)
router.post("/users", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({
            username,
            password,
        });
        console.log("Utilisateur créé avec succès :", user);
        res.json(user);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error);
        res.status(500).json({
            error: "Impossible de créer l'utilisateur",
        });
    }
});

// Route pour la connexion (log-in)
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                username,
                password,
            },
        });

        if (user) {
            res.json({ message: "Connexion réussie" });
        } else {
            res.status(401).json({
                error: "Nom d'utilisateur ou mot de passe incorrect",
            });
        }
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la connexion" });
    }
});

module.exports = router;
