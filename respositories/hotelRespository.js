const BaseRepository = require('./baseRespository');
const hotel = require('../models/hotel');

class HotelRepository extends BaseRepository{
    constructor(){
        super(hotel);     
    }
    addRoom(hotelId, roomDetails) {
        const updateQuery = {
            $push: { rooms: roomDetails },
        };
        const options = { new: true };

        return this.collection.findOneAndUpdate({ _id: hotelId }, updateQuery, options);
    }

    deleteRoom(hotelId, roomId) {
        const updateQuery = {
            $pull: { rooms: { _id: roomId } },
        };
        const options = { new: true };

        return this.collection.findOneAndUpdate({ _id: hotelId }, updateQuery, options);
    }
    
    updateRoom(hotelId, roomId, model) {
        const updateQuery = {
            $set: {
                'rooms.$[room]': {
                    _id: roomId,
                    ...model,
                },
            },
        };
        const options = {
            arrayFilters: [{ 'room._id': roomId }],
            new: true,
        };
        return this.collection.findOneAndUpdate({ _id: hotelId }, updateQuery, options);
    }
}

module.exports = HotelRepository;