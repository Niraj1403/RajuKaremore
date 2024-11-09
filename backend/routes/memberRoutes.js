const express = require('express');
const router = express.Router();
const Member = require('../models/Member');  // Ensure correct path to the Member model

// POST route to add a new member
router.post('/add', async (req, res) => {
    const { name, email } = req.body;
    console.log("*")
    console.log(name , email) 
    try {
        // Validate the presence of required fields
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        // Create and save the new member
        const newMember = new Member({ name, email });
        await newMember.save();

        // Respond with a success message
        res.status(201).json({ message: 'Member added successfully' });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ error: 'Error adding member' });
    }
});
// backend/routes/memberRoutes.js
router.post('/add', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newMember = new Member({ name, email });
    await newMember.save();

    console.log('New Member:', newMember); // This will print the inserted member object

    res.status(201).send('Member added successfully!');
  } catch (error) {
    console.error('Error inserting member:', error); // Print error if any
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
