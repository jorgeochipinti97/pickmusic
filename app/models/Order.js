import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    total: { type: Number,  },
    taza: { type: String, },
    transactionId: { type: String },
    discountCode: { type: String },
    persona: { type: String },
    email: { type: String },
    address: { type: String },
    ciudad: { type: String },
    provincia: { type: String },
    phone: { type: String },
    estado: { type: String, default: "acreditado" },
    dniPersona: { type: String },
    qrLink: { type: String },
    codGestion: { type: String },
    token: { type: String },
    linkWeb: { type: String },
  },
  {
    timestamps: true,
  }
);

const OrderPickMusic =
  mongoose.models.OrderPickMusic || mongoose.model("OrderPickMusic", orderSchema);

export default OrderPickMusic;
