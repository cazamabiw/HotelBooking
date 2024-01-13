const express = require('express');
const BookingController = require('../controllers/bookingController');
const router = express.Router();

const bookingController = new BookingController();

router.get('/getall',bookingController.getAll);
router.get('/getById/:id',bookingController.getById);
router.put('/update/:id', bookingController.updateBooking);
router.delete('/deleteById/:id',bookingController.deleteById);
router.post('/add',bookingController.addBooking);
module.exports = router;