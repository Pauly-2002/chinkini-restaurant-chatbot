// models/Order.js
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
  name: String,
  price: Number,
  qty: Number,
});

const orderSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },

    items: [orderItemSchema],

    totalAmount: { type: Number, required: true },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "preparing",
        "ready",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },

    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid"],
      default: "unpaid",
    },
    
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
