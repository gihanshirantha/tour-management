import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
  getAllWebUsersCount,
  getAllAdminUsers,
  getAllAdminCount,
  getAllWebUsers
 
  
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

//get all web User
router.get("/search/getAllusers",  getAllWebUsers);

//get all web User count
router.get("/search/getUserCount",  getAllWebUsersCount);

//get all admin
router.get("/search/getAlladmin",  getAllAdminUsers);

//get all web User
router.get("/search/getAllAdminCount",  getAllAdminCount);




export default router;
