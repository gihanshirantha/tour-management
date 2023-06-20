import express from "express";
import { createDayTour,
    updateDayTour,
    deleteDayTour,
    getAllDayTour,
    getDayTourCount,
    getSingleDayTour } from "../Controllers/dayTourController.js";


const router=express.Router();

//create new tour
router.post("/",  createDayTour);

//update tour
router.put("/:id", updateDayTour);

//Delete tour
router.delete("/:id", deleteDayTour);

//get single tour
router.get("/:id", getSingleDayTour);

//get all  tour
router.get("/", getAllDayTour);

router.get("/search/getcount",getDayTourCount);



export default router;