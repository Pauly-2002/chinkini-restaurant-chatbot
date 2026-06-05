// models/Message.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },

    sender: {
      type: String,
      enum: ["user", "bot", "restaurant", "whatsapp"],
    },

    channel: {
      type: String,
      enum: ["chatbot", "whatsapp"],
    },

    message: String,

    intent: {
      type: String,
      enum: ["order", "reservation", "complaint", "menu", "general"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
