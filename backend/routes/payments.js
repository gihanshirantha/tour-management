import express from "express";
import { createPayment } from "../Controllers/paymentController.js";
import { verifyUser } from "../Utils/verifyToken.js";

const router = express.Router();

router.post("/:bookingId",  createPayment);

export default router;
