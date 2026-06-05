import express from "express";
import chatBot from "./controllers/chatBotController.js";
import { verifyWebhook, receiveWebhook } from "./webhooks/whatsapp.webhook.js";

const router = express.Router();

console.log("✅ routes.js active");

router.post(
  "/chat",
  (req, res, next) => {
    console.log("🔥 ROUTE HIT /chat");
    next();
  },
  chatBot
);

router.get("/webhook", verifyWebhook);

router.post("/webhook", receiveWebhook);


export default router;
