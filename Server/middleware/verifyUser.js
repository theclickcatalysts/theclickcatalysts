import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("Auth Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // console.warn("No Bearer token provided");
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  // console.log("Token Extracted:", token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Token verified. User:", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    // console.error("Invalid or expired token:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
