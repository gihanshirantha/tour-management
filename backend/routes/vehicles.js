import  express  from "express";
import { createVehicle, updateVehicle,deleteVehicle, getVehicleByPassengers } from "../Controllers/vehicleController.js";
import { verifyAdmin} from "../Utils/verifyToken.js";
const router =express.Router()

//Create vehicle
router.post("/",createVehicle);

// update vehicle
router.put("/:id",updateVehicle);

// delete vehicle
router.delete("/:id",deleteVehicle);

// search by category
router.get("/search/getVehicleByPassenger",getVehicleByPassengers);



export default router;