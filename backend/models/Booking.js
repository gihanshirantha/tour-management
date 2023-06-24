import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    tourId: {
      type: String,
    },
    tourTitle:{
      type: String,
      required: true,
    },
    days:{
      type: Number,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
    },
    whatsappNo: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    massege: {
      type: String,
      required: true,
    },



    payments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Payment",
      },
    ],

    vehicle: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Vehicle",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
