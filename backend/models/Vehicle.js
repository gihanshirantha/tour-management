import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Booking",
    },
    vehicleNo: {
      type: String,
      required: true,
    },
    vehicleCategory:{
      type: String,
      required: true,
    },
    photo: {
      type: String,
      
    },
    driverName: {
      type: String,
      required: true,
    },
    driverContactNo: {
        type: Number,
        required: true,
    },
    noOfPassengers: {
        type: Number,
        required: true,
      },

  },
  { timestamps: true }
);

export default mongoose.model("Vehicle", vehicleSchema);
