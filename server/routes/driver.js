var express = require('express');
const { AddDriver, getDriver, updateDriver, deleteDriver } = require('../controller/driverController');
var router = express.Router();


/* GET users listing. */
router.route('/')
    .get(getDriver)
    .post(AddDriver)

router.route('/:id')
    .put(updateDriver)
    .delete(deleteDriver)

module.exports = router;
