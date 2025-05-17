/*const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Database Configuration
const db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/express-practice', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connection Successful");
  } catch (err) {
    console.error(err);
  }
};

// Define the Schema
const userSchema = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
});

// Create the model
const User = mongoose.model('User', userSchema);

// Controllers

// CREATE
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ ALL
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ ONE
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID" });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser)
      return res.status(404).json({ error: "User not found" });
    res.status(200).json({
      message: "User Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Routes
app.post('/users', createUser);
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

// Connect to DB
db();

//Start the Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});*/


const db = require('./config/db');
const express = require('express');
const userRoutes = require('./routes/routes');

const app = express();
db();

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});