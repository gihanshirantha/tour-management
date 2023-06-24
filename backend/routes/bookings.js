import express from "express";
import {
  createBooking,
  updateBooking,
  getAllBookings,
  getSingleBookings,
} from "../Controllers/bookingController.js";

import { verifyUser, verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//Place a booking
router.post("/", createBooking);

// update Booking
router.put("/:id",  updateBooking);

//get all bookings
router.get("/",  getAllBookings);

// get single booking
router.get("/:id", getSingleBookings);

export default router;
