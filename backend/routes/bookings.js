import express from "express";
import {
  createBooking,
  updateBooking,
  getAllBookings,
  getSingleBookings,
  getUsersBookings,
  deleteBooking,
  cancelBooking
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


export default router;
