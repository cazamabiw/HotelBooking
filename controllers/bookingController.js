const BookingRepository = require('../respositories/bookingRespository');
const BaseController = require('./baseController');
class BookingController extends BaseController{
    constructor(){
        super(BookingRepository);  
    }
    //specific methods
    addBooking = (req, res) => {
        const { hotelId, roomId, checkIn, checkOut, guestName } = req.body;   
        if ((checkIn >= checkOut)|| (checkIn == checkOut)) {
            return this.forbidden(res, 'Checkout date must be greater than check in date');
        }

        this.repo.isRoomAvailable(hotelId, roomId, checkIn, checkOut)
            .then(isAvailable => {
                if (!isAvailable) {
                    return this.forbidden(res, 'Room is not available for the selected dates.');
                } 
                return this.add(req, res);
            })
            .catch(err => {
                return this.internalServerError(res, err.message || 'Internal Server Error');
            });
    };
    updateBooking = (req, res) => {
        const { hotelId, roomId, checkIn, checkOut, guestName } = req.body;   
        if ((checkIn >= checkOut)|| (checkIn == checkOut)) {
            return this.forbidden(res, 'Checkout date must be greater than check in date');
        }

        this.repo.isRoomAvailable(hotelId, roomId, checkIn, checkOut)
            .then(isAvailable => {
                if (!isAvailable) {
                    return this.forbidden(res, 'Room is not available for the selected dates.');
                } 
                return this.update(req, res);
            })
            .catch(err => {
                return this.internalServerError(res, err.message || 'Internal Server Error');
            });
    };

    
    

    
}
module.exports=BookingController;