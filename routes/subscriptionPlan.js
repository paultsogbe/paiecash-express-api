const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Import des models
const SubscriptionPlan = require("../models/SubscriptionPlan");

// Route pour créer un nouveau forfait
router.post(
    "/subscription-plans",

    [
        // Validation  des données d'entrée en utilisant express-validator
        body("name").isString().notEmpty(),
        body("amount").isInt({ min: 1 }).notEmpty(),
    ],

    async (req, res) => {
        // Vérification  s'il y a des erreurs de validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // S'il y a des erreurs,on renvoye un code d'erreur avec les messages d'erreur
            return res.status(400).json({ errors: errors.array() });
        }

        //  Création de forfait si les données sont valides.
        const { name, amount } = req.body;
        try {
            const subscriptionPlan = await SubscriptionPlan.create({
                name,
                amount,
            });
            res.json(subscriptionPlan);
        } catch (error) {
            res.status(500).json({ error: "Impossible de créer le forfait" });
        }
    }
);

// Route pour récupérer tous les forfaits
router.get("/subscription-plans", async (req, res) => {
    try {
        const subscriptionPlans = await SubscriptionPlan.findAll();
        res.json(subscriptionPlans);
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer les forfaits" });
    }
});

// Route pour récupérer un forfait par son ID
router.get("/subscription-plans/:id", async (req, res) => {
    const planId = req.params.id;
    try {
        const subscriptionPlan = await SubscriptionPlan.findByPk(planId);
        if (subscriptionPlan) {
            res.json(subscriptionPlan);
        } else {
            res.status(404).json({ error: "Forfait non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ error: "Impossible de récupérer le forfait" });
    }
});

// Route pour mettre à jour un forfait par son ID
router.put("/subscription-plans/:id", async (req, res) => {
    const planId = req.params.id;
    const { name, amount } = req.body;
    try {
        const subscriptionPlan = await SubscriptionPlan.findByPk(planId);
        if (subscriptionPlan) {
            await subscriptionPlan.update({
                name,
                amount,
            });
            res.json(subscriptionPlan);
        } else {
            res.status(404).json({ error: "Forfait non trouvé" });
        }
    } catch (error) {
        res.status(500).json({
            error: "Impossible de mettre à jour le forfait",
        });
    }
});

// Route pour supprimer un forfait par son ID
router.delete("/subscription-plans/:id", async (req, res) => {
    const planId = req.params.id;
    try {
        const subscriptionPlan = await SubscriptionPlan.findByPk(planId);
        if (subscriptionPlan) {
            await subscriptionPlan.destroy();
            res.json({ message: "Forfait supprimé avec succès" });
        } else {
            res.status(404).json({ error: "Forfait non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ error: "Impossible de supprimer le forfait" });
    }
});

module.exports = router;
