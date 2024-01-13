const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;
const hotelSchema = new Schema({
    _id:{type: objectId, auto: true},
    name: {type:String, required:true},
    location: {type: String,required: true},
    description: {type: String,required: true},
    rooms: [
        {
          _id: { type: objectId, auto: true },
          type: { type: String, required: true },
          capacity: { type: Number, required: true },
          price: { type: Number, required: true },
        }
      ],    
      ratings: [
        {
            _id: { type: objectId, auto: true },
            rating: { type: Number, required: true, min: 1, max: 5 },
            comment: { type: String },
            guestName: {type:String,require:true}
        }
      ],
 }, {
        versionKey: false
});

const category = mongoose.model('hotels', hotelSchema);
module.exports = category;
