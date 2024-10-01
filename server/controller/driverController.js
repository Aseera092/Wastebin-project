const Driver = require("../model/driverModel");

const AddDriver = async (req, res, next) => {
    try {
        // Validate password and confirmPassword
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({
                status: false,
                message: "Passwords do not match"
            });
        }

        // Check if a driver with the same name already exists
        const existingDriver = await Driver.findOne({ mobileNo: req.body.mobileNo });
        if (existingDriver) {
            return res.status(400).json({
                status: false,
                message: "Driver already exists"
            });
        }
        const DriverId = "DV" + req.body.mobileNo.substring(6,9);

        // Create a new driver instance
        const driver = new Driver(req.body);
        await driver.save(); // Wait for the save to complete

        res.status(201).json({
            status: true,
            message: "Driver added successfully",
            data: driver // Return the saved driver object
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error adding driver',
            error: error.message
        });
    }
}

const getDriver = async (req, res, next) => {
    try {
        // Fetch all Drivers from MongoDB
        const drivers = await Driver.find();

        res.status(200).json({
            status: true,
            data: drivers // Return the list of drivers
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error fetching data',
            error: error.message
        });
    }
};

const updateDriver = async (req, res, next) => {
    try {
        // Fetch and update Driver by ID
        const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!driver) {
            return res.status(404).json({
                status: false,
                message: 'Driver not found'
            });
        }

        res.status(200).json({
            status: true,
            message: "Driver updated successfully",
            data: driver // Return the updated driver object
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error updating driver data',
            error: error.message
        });
    }
};

const deleteDriver = async (req, res, next) => {
    try {
        // Find and delete the driver by ID
        const driver = await Driver.findByIdAndDelete(req.params.id);

        if (!driver) {
            return res.status(404).json({
                status: false,
                message: 'Driver not found'
            });
        }

        res.status(200).json({
            status: true,
            message: "Driver deleted successfully",
            data: driver // Return the deleted driver object
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error deleting driver',
            error: error.message
        });
    }
};

module.exports = { AddDriver, getDriver, updateDriver, deleteDriver };
