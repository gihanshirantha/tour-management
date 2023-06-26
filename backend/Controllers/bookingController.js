import Booking from "../models/Booking.js ";

//create booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "successfully Recorded",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
};

//delete booking

export const deleteBooking = async (req, res) => {
  const id = req.params.id;
  try {
    await Booking.findByIdAndDelete(id);

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

//update Booking

export const updateBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not updated",
    });
  }
};

//get all bookings

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({}).populate("payments");
    res.status(200).json({
      success: true,

      message: "Successfull",
      data: bookings,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "Not found",
    });
  }
};

// get single booking
export const getSingleBookings = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findById(id).populate("payments");
    res.status(200).json({
      success: true,

      message: "Successfull",
      data: booking,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "Not found",
    });
  }
};

// get users booking
export const getUsersBookings = async (req, res) => {
  const userid = req.params.id;
  try {
    const booking = await Booking.find({
      userId:userid,
    })
    res.status(200).json({
      success: true,

      message: "Successfull",
      data: booking,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "Not found",
    });
  }
};


//CancelBooking Booking

export const cancelBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      {
        status: "Canceled",
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Canceled Your Booking",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not updated",
    });
  }
};

//ConfirmBooking Booking

export const confirmBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      {
        status: "Confirm",
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Confirm Your Booking",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not updated",
    });
  }
};