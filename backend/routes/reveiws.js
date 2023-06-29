import express from "express";
import { createReview, deleteReview } from "../Controllers/reveiwController.js";
import { verifyUser } from "../Utils/verifyToken.js";

const router = express.Router();

router.post("/:tourId", createReview);

router.delete("/:id",deleteReview);

export default router;
