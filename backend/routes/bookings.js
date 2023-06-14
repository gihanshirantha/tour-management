import express  from "express";
import { createBooking, updateBooking, getAllBookings, getSingleBookings } from "../Controllers/bookingController.js";

import { verifyUser, verifyAdmin } from "../Utils/verifyToken.js";

const router =express.Router();

//Place a booking
router.post('/',verifyUser,createBooking);


// update Booking
router.put("/:id",verifyUser, updateBooking);

//get all bookings
router.get("/",verifyAdmin,getAllBookings);

// get single booking
router.get("/:id",verifyUser,getSingleBookings);





export default router  