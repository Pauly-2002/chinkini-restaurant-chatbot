import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String, required: true, unique: true },
  whatsappId: { type: String },
  email: { type: String },
  address: {
    type: String,
  },

  preference: {
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "menu" }],
    spicyLevel: { type: String, enum: ["low", "medium", "high"] },
  },
},{ timestamps: true });

export default mongoose.model("Customer", customerSchema);