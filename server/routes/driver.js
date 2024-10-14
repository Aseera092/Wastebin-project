var express = require('express');
const { AddDriver, getDriver, updateDriver, deleteDriver, machineDirection } = require('../controller/driverController');
var router = express.Router();


/* GET users listing. */
router.route('/')
    .get(getDriver)
    .post(AddDriver)

router.route('/:id')
    .put(updateDriver)
    .delete(deleteDriver)

router.route('/direction').post(machineDirection)

module.exports = router;
