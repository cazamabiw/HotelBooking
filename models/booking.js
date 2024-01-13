const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;
const bookingSchema = new Schema({
    _id:{type: objectId, auto: true},
    hotelId: {type: mongoose.Schema.Types.ObjectId,ref: 'Hotel',required: true,},
    roomId: {type: mongoose.Schema.Types.ObjectId,required: true,},
    checkIn: {type: Date,required: true,},
    checkOut: {type: Date,required: true,},
    guestName: {type: String,required: true,},
   
 }, {
        versionKey: false
});

const category = mongoose.model('bookings', bookingSchema);
module.exports = category;
