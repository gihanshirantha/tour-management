import Tour from "../models/Tour.js ";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Review not submitted",
    });
  }
};

//delete tour

export const deleteReview = async (req, res) => {
  const id = req.params.id;
  try {
    await Review.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not deleted",
    });
  }
};