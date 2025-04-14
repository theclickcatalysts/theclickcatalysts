import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserPassword,
} from "../modulars/authModule.js";
import { hashPassword } from "../utils/hash.js";

dotenv.config();
const saltRounds = 10;

// Register Controller
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match." });
    }

    const hashedPassword = await hashPassword(password);
    const result = await createUser(name, email, hashedPassword);

    return res.status(201).json({ success: true, message: "User registered successfully", data: result });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ success: false, message: "Error during registration" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ Error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ Error: "Password is incorrect" });
    }

    const secretKey = process.env.JWT_SECRET || "default_secret_key"; // Ensure secret key is set
    const token = jwt.sign({ id: user.user_id }, secretKey, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" });
    return res.json({ Status: "User logged in successfully", token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ Error: "Error during login" });
  }
};

// Logout Controller
export const logoutUser = (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "None" });
  return res.json({ success: true, message: "User logged out successfully" });
};

// Change Password
export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await findUserById(req.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Incorrect old password" });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);
    await updateUserPassword(req.userId, newHashedPassword);

    return res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Password change error:", error);
    return res.status(500).json({ success: false, message: "Error changing password" });
  }
};
