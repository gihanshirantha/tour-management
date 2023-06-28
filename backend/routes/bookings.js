import express from "express";
import {
  createBooking,
  updateBooking,
  getAllBookings,
  getSingleBookings,
  getUsersBookings,
  deleteBooking,
  cancelBooking,
  doPaymentBooking,
  waitingPaidBookingCount,
  confirmBooking,
  finishedBooking,
  getCanceledBookings,
  getConfirmedBookings,
  getFinishedBookings,
  FinishedBookingCount,
  ConfirmedBookingCount,
  getWaitingBookings
} from "../Controllers/bookingController.js";

import { verifyUser, verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//Place a booking
router.post("/", createBooking);

// update Booking
router.put("/:id",  updateBooking);

// delete Booking
router.delete("/:id",  deleteBooking);

//get all bookings
router.get("/",  getAllBookings);

// get single booking
router.get("/:id", getSingleBookings);

// get Users booking
router.get("/users/:id", getUsersBookings);

// cancel booking
router.put("/cancel/:id", cancelBooking);

// cancel booking
router.get("/canceledBookings", getCanceledBookings);

// confirm booking
router.put("/confirm/:id", confirmBooking);

// Confirmed booking
router.get("/search/confirmedBookings", getConfirmedBookings);

// Confirmed booking Count
router.get("/search/confirmed", ConfirmedBookingCount );

// finished booking
router.put("/finished/:id", finishedBooking);

// finished booking
router.get("/search/finishedBookings", getFinishedBookings);

// Finished booking Count
router.get("/search/finished", FinishedBookingCount );

// payment update booking
router.put("/payment/:id", doPaymentBooking);

// Paid waiting tour Count
router.get("/search/paidwaiting", waitingPaidBookingCount);

// waiting booking
router.get("/search/waitingBookings", getWaitingBookings);



export default router;
