// Les tests unitaires

const SubscriptionPlan = require("../models/SubscriptionPlan");

describe("SubscriptionPlan Model", () => {
    it("creates a new subscription plan", async () => {
        const subscriptionPlan = await SubscriptionPlan.create({
            name: "Basic",
            amount: 10,
        });

        expect(subscriptionPlan.name).toBe("Basic");
        expect(subscriptionPlan.amount).toBe(10);
    });
});
