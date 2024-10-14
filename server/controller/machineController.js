const Machine = require("../model/machineModel");
const { firebaseDatabase } = require("../util/firebase-conn");

const addMachine = async (req, res, next) => {
    const { machineId } = req.body;

    // Validate machineId
    if (!machineId) {
        return res.status(400).json({ status: false, error: 'Machine ID is required.' });
    }

    try {
        // Check if the machineId already exists in MongoDB
        const existingMachine = await Machine.findOne({ machineId });
        if (existingMachine) {
            return res.status(400).json({
                status: false,
                error: `Machine ID '${machineId}' already exists. Please choose a different ID.`
            });
        }

        const machine = new Machine(req.body);
        await machine.save();  // Save to MongoDB

        await database.ref(machineId).set({ status: 0 });  // Set initial status in Firebase

        res.status(201).json({
            status: true,
            data: machine
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error saving machine',
            error: error.message
        });
    }
};

const getMachine = async (req, res, next) => {
    try {
        // Fetch machines from MongoDB
        const machines = await Machine.find();

        // Use Promise.all to resolve all promises in the map
        const dt = await Promise.all(machines.map(async (machine) => {
            const snapshot = await firebaseDatabase.ref(`${machine.machineId}/status`).once('value');
            const storage = snapshot.val();
            return {
                ...machine._doc,
                storage
            };
        }));

        res.status(200).json({
            status: true,
            data: dt
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error fetching data',
            error: error.message
        });
    }
};

const updateMachine = async (req, res, next) => {
    const { machineId } = req.body;

    // Validate machineId
   

    try {
        // Fetch and update the machine in MongoDB
        const machine = await Machine.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!machine) {
            return res.status(404).json({ status: false, error: 'Machine not found.' });
        }

        res.status(200).json({
            status: true,
            data: machine
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error updating data',
            error: error.message
        });
    }
};

const deleteMachine = async (req, res, next) => {
    try {
        const machine = await Machine.findById(req.params.id);

        // Validate machine existence
        if (!machine) {
            return res.status(404).json({ status: false, error: 'Machine not found.' });
        }

        const { machineId } = machine;

        // Validate machineId
       

        await Machine.findByIdAndDelete(req.params.id);  // Delete from MongoDB
        await database.ref(machineId).remove();  // Remove from Firebase

        res.status(200).json({
            status: true,
            data: machine
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error deleting data',
            error: error.message
        });
    }
};

module.exports = { addMachine, getMachine, updateMachine, deleteMachine };
