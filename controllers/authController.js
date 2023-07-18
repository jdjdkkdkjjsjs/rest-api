import userModel from '../models/userModel.js';
import orderModel from "../models/orderModel.js";
import { comparePassword, hashPassword } from './../helpers/authHelper.js';
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, password } = req.body;
    // Validation
    if (!password) {
      return res.send({ message: "Password is Required" });
    }

    // Register user
    const user = await new userModel({
      name,
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
