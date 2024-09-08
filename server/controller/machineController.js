const Machine = require("../model/machineModel")
const firebase = require("firebase-admin")
const serviceAccount = require('../donor-50002-firebase-adminsdk-rle7e-5168946c84.json');
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://donor-50002.firebaseio.com'
})

const database = firebase.database();


const addMachine = async (req, res, next) => {
    const machine = new Machine(req.body);
    machine.save()

    const machineId = req.body.machineId ? req.body.machineId : res.json({ status: false, error: 'Machine ID not found' });
    await database.ref(machineId).set({ status: 0 });

    res.json({
        status: true,
        data: machine
    }, 201)
}

const getMachine = async (req, res, next) => {
    try {
        // Fetch machines from MongoDB
        const machines = await Machine.find();

        // Use Promise.all to resolve all promises in the map
        const dt = await Promise.all(machines.map(async (machine) => {
            const snapshot = await database.ref(`${machine._doc.machineId}/status`).once('value');
            const storage = snapshot.val();
            console.log(storage);

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
    try {
        // Fetch machines from MongoDB
        const machine = await Machine.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            status: true,
            data: machine
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error update data',
            error: error.message
        });
    }
};

const deleteMachine = async (req, res, next) => {
    try {
        const {machineId}= await Machine.findById(req.params.id)
        console.log(machineId);
        
        const machine = await Machine.findByIdAndDelete(req.params.id);
        
        await database.ref(machineId).remove()
        res.status(200).json({
            status: true,
            data: machine
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Error update data',
            error: error.message
        });
    }
};



module.exports = { addMachine, getMachine, updateMachine, deleteMachine }