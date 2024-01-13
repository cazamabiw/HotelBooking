const express = require('express');
const HotelController = require('../controllers/hotelController');
const router = express.Router();

const hotelController = new HotelController();

router.get('/getall',hotelController.getAll);
router.get('/getById/:id',hotelController.getById);
router.post('/add',hotelController.add);
router.put('/update/:id', hotelController.update);
router.delete('/deleteById/:id',hotelController.deleteById);

router.post('/addRoom/:id/room', hotelController.addRoom);
router.delete('/deleteRoom/:id/room/:roomId', hotelController.deleteRoom);
router.put('/updateRoom/:id/room/:roomId', hotelController.updateRoom);

module.exports = router;