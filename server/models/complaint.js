// models/Complaint.js
import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },

    message: { type: String, required: true },

    category: {
      type: String,
      enum: ["food", "service", "delivery", "payment", "other"],
    },

    status: {
      type: String,
      enum: ["open", "in_progress", "resolved"],
      default: "open",
    },

    resolutionNote: String,
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);
