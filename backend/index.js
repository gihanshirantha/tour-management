import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/authentication.js";
import reviewRoute from "./routes/reveiws.js";
import bookingRoute from "./routes/bookings.js";
import paymentRoute from "./routes/payments.js";
import vehicleRoute from "./routes/vehicles.js";
import daytourRout from "./routes/daytours.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: "*",
 
};

//database connection

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database IS Connected");
  } catch (error) {
    console.log("Database NOT Connected");
  }
};

//for testing
app.get("/", (req, res) => {
  res.send("api is working");
});

//middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/vehicle", vehicleRoute);
app.use("/api/v1/daytours", daytourRout);


app.use((error, req, res, next) => {
  console.error(error);
  res.json({ error });
});

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
