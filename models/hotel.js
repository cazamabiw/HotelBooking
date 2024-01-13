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
          availability: { type: Boolean, default: true },
          price: { type: Number, required: true },
        }
      ],
     
 }, {
        versionKey: false
});

const category = mongoose.model('hotels', hotelSchema);
module.exports = category;
