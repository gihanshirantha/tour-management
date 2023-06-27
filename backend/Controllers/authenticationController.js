import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user register
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      email: req.body.email,
      fullname: req.body.fullname,
      password: hash,
      telephone: req.body.telephone,
      country: req.body.country,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to create. Try again",
    });
  }
};

// user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const { password, role, ...rest } = user._doc;

    //create jwt token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    //set token in the browser
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        message: "successfully login",
        data: { ...rest },
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faild to Login",
    });
  }
};

