import Booking from '../models/Booking.js '


//create booking
export const createBooking=async(req,res)=>{
    const newBooking= new Booking(req.body)
    try {
        const savedBooking=await newBooking.save();
        res.status(200).json({
            success:true,
            message:'successfully Recorded',
            data:savedBooking
        });
    } catch (err) {
        res.status(500).json({
            success:fales,
            message:'Internal server error'
        })
    }
}

//update Booking

export const updateBooking=async(req,res)=>{

    const id = req.params.id

    try {
        
        const updatedBooking=await Booking.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'successfully updated',
            data:updatedBooking
        });

    } catch (error) {
        res.status(500).json({
            success:true,
            message:'Not updated',
            
        });

    }
}

//get all bookings

export const getAllBookings=async(req,res)=>{
    try {

        const bookings=await Booking.find({}).populate("payments");
        res.status(200).json({
            success:true,
           
            message:'Successfull',
            data:bookings,
        });
        
    } catch (error) {
        res.status(404).json({
            success:true,
            message:'Not found',
            
        });
    }
}

// get single booking
export const getSingleBookings=async(req,res)=>{
    const id=req.params.id;
    try {

        const booking=await Booking.findById(id).populate("payments");
        res.status(200).json({
            success:true,
           
            message:'Successfull',
            data:booking,
        });
        
    } catch (error) {
        res.status(404).json({
            success:true,
            message:'Not found',
            
        });
    }
}
