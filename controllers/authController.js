import userModel from '../models/userModel.js';
import orderModel from "../models/orderModel.js";
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Validation
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered, please login",
      });
    }

    // Register user
    const user = await new userModel({
      name,
      email: email || undefined,
      password,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    // Password validation
    if (password && password.length < 6) {
      return res.json({ error: "Password is required and must be at least 6 characters long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        email: email || undefined,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error While Updating Profile",
      error,
    });
  }
};
