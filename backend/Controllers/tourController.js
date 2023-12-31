import { query } from "express";
import Tour from "../models/Tour.js";
import { sendNotFoundResponse } from "../reponses/notFoundResponse.js";

//create new tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to crate tour",
    });
  }
};

//update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Not updated",
    });
  }
};
//delete tour

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

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

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    if (!tour) sendNotFoundResponse(res, "tour");

    res.status(200).json({
      success: true,
      message: "detected",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "Not found",
    });
  }
};
//get all  tour

export const getAllTour = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({ mode: "RoundTour" })
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    if (!tours) sendNotFoundResponse(res, "tours");

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfull",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({
      success: true,
      message: "Not found",
    });
  }
};

// get tour by search

export const getTourBySearch = async (req, res) => {
  const days = parseInt(req.query.days);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      // gte means greater than or equal
      days: { $gte: days },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    if (!tours) sendNotFoundResponse(res, "tour");

    res.status(200).json({
      success: true,
      message: "successful",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

//get featured tours

export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).populate("reviews");

    if (!tours) sendNotFoundResponse(res, "Featured tours");

    res.status(200).json({
      success: true,
      message: "successful",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

//get All tours

export const getRoundTour = async (req, res) => {
  try {
    const tours = await Tour.find({});

    if (!tours) sendNotFoundResponse(res, "Featured tours");

    res.status(200).json({
      success: true,
      message: "successful",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

//get Day tours

export const getDayTour = async (req, res) => {
  try {
    const tours = await Tour.find({ mode: "DayTour" }).populate("reviews");

    if (!tours) sendNotFoundResponse(res, "Featured tours");

    res.status(200).json({
      success: true,
      message: "successful",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};
// get day tour Count
export const getDayTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.countDocuments({
      mode: "DayTour",
    });
    res.status(200).json({
      success: true,

      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

// get Round tour Count
export const getRoundTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.countDocuments({
      mode: "RoundTour",
    });
    res.status(200).json({
      success: true,

      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};

//get tour counts

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,

      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "not found",
    });
  }
};
