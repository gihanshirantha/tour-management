import mongoose from "mongoose";

const daytourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],


  },
  { timestamps: true }
);

export default mongoose.model("DayTour", daytourSchema);
