var express = require('express');
const { addMachine, getMachine, updateMachine, deleteMachine } = require('../controller/machineController');
var router = express.Router();


/* GET users listing. */
router.route('/')
    .get(getMachine)
    .post(addMachine)

router.route('/:id')
    .put(updateMachine)
    .delete(deleteMachine)

module.exports = router;
