import { pool } from "../utils/db.js";

// Create a new user
export const createUser = (name, email, hashedPassword) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    pool.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) return reject(err);
      resolve({ user_id: result.insertId, name, email });
    });
  });
};

// Find user by email
export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    pool.query(sql, [email], (err, result) => {
      if (err) return reject(err);
      resolve(result.length > 0 ? result[0] : null);
    });
  });
};

// Find user by ID
export const findUserById = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    pool.query(sql, [userId], (err, result) => {
      if (err) return reject(err);
      resolve(result.length > 0 ? result[0] : null);
    });
  });
};

// Update user password
export const updateUserPassword = (userId, hashedPassword) => {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE users SET password = ? WHERE user_id = ?";
    pool.query(sql, [hashedPassword, userId], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
