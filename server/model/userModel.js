const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the driver schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true
    },
    alternateMobileNo: {
        type: Number,
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    house_no: {
        type: String,
        required: true,
    },
    location_details: {
        type: String,
        required: true,
    },
    request_date: {
        type: String,
        required: true,
    },
    suggestions: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['online', 'offline'],
        default: 'offline',
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum password length
    },
    confirmPassword: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Pre-save middleware to hash the password
driverSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        // Hash the password
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to check if passwords match
driverSchema.methods.isPasswordMatch = function(plainPassword) {
    return bcrypt.compareSync(plainPassword, this.password);
};

// Create the driver model
const User = mongoose.model('User', userSchema);

module.exports = User;
