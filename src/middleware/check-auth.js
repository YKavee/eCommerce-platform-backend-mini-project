const express = require("express");
const jwt = require("jsonwebtoken");

exports.checkAuth = (tokens) => {
  try {
    const token = tokens;
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded;
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }
};
