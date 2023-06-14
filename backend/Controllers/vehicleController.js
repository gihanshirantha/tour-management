import Booking from "../models/Booking.js";
import Vehicle from '../models/Vehicle.js'

//create new vehicle

export const createVehicle = async (req,res)=>{
    const newVehicle = new Vehicle(req.body)
    try {
        const savedVehicle=await newVehicle.save();

        res.status(200).json({
            success:true,
            message:'successfully created',
            data:savedVehicle
        });
    } catch (err) {
        res.status(500).json({
            success:true,
            message:'failed to crate Vehicle'
        })
    }
}

// Update vehicle details
export const updateVehicle=async(req,res)=>{

    const id = req.params.id

    try {
        
        const updatedVehicle=await Vehicle.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'successfully updated',
            data:updatedVehicle
        });

    } catch (error) {
        res.status(500).json({
            success:true,
            message:'Not updated',
            
        });

    }
}
//delete Vehicle

export const deleteVehicle=async(req,res)=>{
    const id = req.params.id
    try {
        
       await Vehicle.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:'successfully deleted',
            
        });

    } catch (error) {
        res.status(500).json({
            success:true,
            message:'Not deleted',
            
        });

    }
}

// get a vehicle by number of passengers

export const getVehicleByPassengers=async(req,res)=>{
    const categ =parseInt(req.query.noOfPassengers);

    try {

        const vehicle=await Vehicle.find({
            noOfPassengers:{$gte:categ}
        })
        res.status(200).json({
            success:true,
            message:'successful',
            data:vehicle,
        });
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'not found'
        })
    }
}