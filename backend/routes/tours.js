import express from "express";
import {
  createTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount, getRoundTour,getDayTour, getDayTourCount, getRoundTourCount
} from "../Controllers/tourController.js";
import { updateTour } from "../Controllers/tourController.js";
import { deleteTour } from "../Controllers/tourController.js";
import { getSingleTour } from "../Controllers/tourController.js";
import { getAllTour } from "../Controllers/tourController.js";

import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/",  createTour);

//update tour
router.put("/:id",  updateTour);

//Delete tour
router.delete("/:id",  deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//get all  tour
router.get("/", getAllTour);
router.get("/search/roundTourCount",getRoundTourCount);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getAllTours", getRoundTour);

router.get("/search/getDayTours", getDayTour);
router.get("/search/dayTourCount",getDayTourCount);

router.get("/search/getTourCount", getTourCount);


export default router;
