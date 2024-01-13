const HotelRepository = require('../respositories/hotelRespository');
const BaseController = require('./baseController');
class HotelController extends BaseController{
    constructor(){
        super(HotelRepository);  
    }
    //specific methods
     addRoom = (req, res) => {
        const hotelId = req.params.id;
        const roomDetails = req.body;

        this.repo.addRoom(hotelId, roomDetails)
            .then(doc => {
                return this.created(res, doc); 
            })
            .catch(err => {
                return this.internalServerError(res, err);
            });
    };

    deleteRoom = (req, res) => {
        const hotelId = req.params.id;
        const roomId = req.params.roomId;

        this.repo.deleteRoom(hotelId, roomId)
            .then(doc => {
                return this.deleted(res, doc);
            })
            .catch(err => {
                return this.internalServerError(res, err);
            });
    };

     updateRoom = (req, res) => {
        const hotelId = req.params.id;
        const roomId = req.params.roomId;
        const body = req.body;
    
        this.repo.updateRoom(hotelId, roomId, body)
            .then(doc => {
                return this.updated(res, doc);
            })
            .catch(err => {
                return this.internalServerError(res, err);
            });
    };
    
}
module.exports=HotelController;