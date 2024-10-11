const User = require("../model/userModel");

const AddUser = async (req, res, next) => {
    try {
        // Validate password and confirmPassword
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Passwords do not match"
            });
        }

        // Check if a driver with the same name already exists
        const existingUser = await Driver.findOne({ mobileNo: req.body.mobileNo });
        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "User already exists"
            });
        }
        const UserId = "US" + req.body.mobileNo.substring(6,9);

        // Create a new driver instance
        const user = new User(req.body);
        await user.save(); // Wait for the save to complete

        res.status(201).json({
            status: true,
            message: "User added successfully",
            data: user // Return the saved driver object
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error adding User',
            error: error.message
        });
    }
}

const getUser = async (req, res, next) => {
    try {
        // Fetch all Drivers from MongoDB
        const user = await User.find();

        res.status(200).json({
            status: true,
            data: user // Return the list of drivers
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error fetching data',
            error: error.message
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
        // Fetch and update Driver by ID
        const user = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            status: true,
            message: "User updated successfully",
            data: driver // Return the updated driver object
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error updating user data',
            error: error.message
        });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        // Find and delete the driver by ID
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            status: true,
            message: "User deleted successfully",
            data: user // Return the deleted driver object
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error deleting user',
            error: error.message
        });
    }
};

module.exports = { AddUser, getUser, updateUser, deleteUser };
