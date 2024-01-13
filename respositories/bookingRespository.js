const BaseRepository = require('./baseRespository');
const booking = require('../models/booking');

class BookingRepository extends BaseRepository{
    constructor(){
        super(booking);     
    }
   //specific methods
    isRoomAvailable(hotelId, roomId, checkIn, checkOut) {
   
        return this.collection.findOne({
            hotelId,
            roomId,
            $or: [
                { checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } }, //Booking overlaps checkIn
                { checkIn: { $gte: checkIn, $lt: checkOut } },              //Booking starts within date range
                { checkOut: { $gt: checkIn, $lte: checkOut } }               //Booking ends within date range
            ]
        })
        .then(existingBooking => {
            return !existingBooking; //Return true if no conflicting booking found
        });
    }
}

module.exports = BookingRepository;