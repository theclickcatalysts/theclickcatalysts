import express from "express";
import { registerUser, loginUser, logoutUser, changePassword } from "../controllers/authController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/change-password", verifyUser, changePassword);

export default router;
