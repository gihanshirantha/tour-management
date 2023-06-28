import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
 
  
} from "../Controllers/userController.js";
import { verifyAdmin, verifyUser } from "../Utils/verifyToken.js";
const router = express.Router();

//update User
router.put("/:id",  updateUser);

//Delete User
router.delete("/:id", deleteUser);

//get single User
router.get("/:id",  getSingleUser);

//get all  User
router.get("/",  getAllUser);




export default router;
