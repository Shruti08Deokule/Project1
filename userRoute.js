const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/userModel");

const router = express.Router();

// Create operation (POST route)
router.post("/", async (req, res) => {
  // Extract data from request body
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });

    // Send success response
    res.status(201).json(userAdded);
  } catch (error) {
    console.log("Error:", error);
    res.status(400).json({ error: error.message || "An error occurred" });
  }
});

// Basic GET route for fetching all users
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

// Get single user by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById(id); // Correct usage of findById
    
    if (!singleUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

// Delete operation
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findByIdAndDelete(id); // Correct usage of findByIdAndDelete
    if (!singleUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message || "An error occurred" });
  }
});

// put or update operation
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    //update kartana sagla pahije body
    const{name,email,age}=req.body
    try {
      const singleUser = await User.findByIdAndUpdate(id,req.body,{new:true}); // Correct usage of findByIdAndDelete
      if (!singleUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(singleUser);
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ error: error.message || "An error occurred" });
    }
  });

module.exports = router;
