import DayTour from "../models/DayTour.js";
import { sendNotFoundResponse } from "../reponses/notFoundResponse.js";

//create new tour

export const createDayTour = async (req, res) => {
    const newDayTour = new DayTour(req.body);
    try {
      const savedDayTour = await newDayTour.save();
  
      res.status(200).json({
        success: true,
        message: "successfully created",
        data: savedDayTour,
      });
    } catch (err) {
      res.status(500).json({
        success: fales,
        message: "failed to crate tour",
      });
    }
  };

//update tour

export const updateDayTour = async (req, res) => {
    const id = req.params.id;
  
    try {
      const updatedDayTour = await DayTour.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "successfully updated",
        data: updatedDayTour,
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Not updated",
      });
    }
  };

  //delete tour

export const deleteDayTour = async (req, res) => {
    const id = req.params.id;
    try {
      await DayTour.findByIdAndDelete(id);
  
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

  //get single tour

export const getSingleDayTour = async (req, res) => {
    const id = req.params.id;
    try {
      const daytour = await DayTour.findById(id).populate("reviews");
  
      if (!daytour) sendNotFoundResponse(res, "tour");
  
      res.status(200).json({
        success: true,
        message: "detected",
        data: daytour,
      });
    } catch (error) {
      res.status(404).json({
        success: true,
        message: "Not found",
      });
    }
  };

  //get all  tour

export const getAllDayTour = async (req, res) => {
   
    
    try {
      const daytours = await DayTour.find({})
        .populate("reviews")
    
  
        if (!daytours) sendNotFoundResponse(res, "tours");
  
      res.status(200).json({
        success: true,
        count: daytours.length,
        message: "Successfull",
        data: daytours,
      });
    } catch (error) {
      res.status(404).json({
        success: true,
        message: "Not found",
      });
    }
  };

  //get tour counts

export const getDayTourCount = async (req, res) => {
    try {
      const daytourCount = await DayTour.estimatedDocumentCount();
      res.status(200).json({
        success: true,
  
        data: daytourCount,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "not found",
      });
    }
  };
  