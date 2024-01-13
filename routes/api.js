const express = require('express');
const router = express.Router();

router.use('/hotel',require('./hotelRoutes'));

module.exports = router;