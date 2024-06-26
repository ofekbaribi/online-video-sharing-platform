const User = require('../models/userSchema'); // Import the User model
const bcrypt = require('bcrypt');
const { generateToken } = require('../controllers/tokenController');

// Create a new user
const createUser = async (userData) => {
  try {
    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    const user = new User(userData);
    await user.save();

    // Generate a token for the user
    const token = generateToken(user);

    return { user, token };
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

// Authenticate a user
const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid username or password');
    }
    return user;
  } catch (error) {
    throw new Error(`Error authenticating user: ${error.message}`);
  }
};

// Get a user by username
const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

// Update a user by username
const updateUser = async (username, updates) => {
  try {
    const user = await User.findOneAndUpdate({ username }, updates, { new: true });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

// Delete a user by username
const deleteUser = async (username) => {
  try {
    const user = await User.findOneAndDelete({ username });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};

// Check if a username exists
const checkUsernameExists = async (username) => {
    try {
      const user = await User.findOne({ username: username });
      return user? true: false;
    } catch (error) {
      throw new Error(`Error checking username: ${error.message}`);
    }
  };

module.exports = {
  createUser,
  authenticateUser,
  getUserByUsername,
  updateUser,
  deleteUser,
  checkUsernameExists,
};
