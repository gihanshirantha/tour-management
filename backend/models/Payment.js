import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: mongoose.Types.ObjectId,
      ref: "Booking",
    },
    amount: {
      type: Number,
      required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);