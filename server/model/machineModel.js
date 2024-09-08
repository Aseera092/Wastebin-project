const mongoose = require('mongoose');

// Define the machine schema
const machineSchema = new mongoose.Schema({
  machineId: {
    type: String,
    required: true,
    unique: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['online', 'offline', 'maintenance'], // Example statuses
    default: 'offline',
    required: true
  }
}, { timestamps: true }); // This will add createdAt and updatedAt timestamps

// Create the machine model
const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;