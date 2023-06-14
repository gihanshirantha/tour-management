import express from "express";
import {
  createTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../Controllers/tourController.js";
import { updateTour } from "../Controllers/tourController.js";
import { deleteTour } from "../Controllers/tourController.js";
import { getSingleTour } from "../Controllers/tourController.js";
import { getAllTour } from "../Controllers/tourController.js";

import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);

//update tour
router.put("/:id", verifyAdmin, updateTour);

//Delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//get all  tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
