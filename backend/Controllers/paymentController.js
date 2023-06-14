import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";

//create a payment

export const createPayment = async (req, res) => {
  const bookingId = req.params.bookingId;
  const newPayment = new Payment({ ...req.body });

  try {
    const savedPayment = await newPayment.save();

    await Booking.findByIdAndUpdate(bookingId, {
      $push: { payments: savedPayment._id },
    });
    res.status(200).json({
      success: true,
      message: "Payment submitted",
      data: savedPayment,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Payment not submitted",
    });
  }
};
