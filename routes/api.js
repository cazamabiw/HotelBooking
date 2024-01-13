const express = require('express');
const router = express.Router();

router.use('/hotel',require('./hotelRoutes'));
router.use('/booking',require('./bookingRoutes'));
module.exports = router;