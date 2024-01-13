const httpStatusCodes = require('http-status-codes');
class BaseController{
    constructor(repoClass){
        this.repo = new repoClass();
    }
    //common response methods
    ok(res,data){
        if(!!data){
            res.status(httpStatusCodes.StatusCodes.OK).send(data)
        }
        else{
            return res.status(httpStatusCodes.StatusCodes.OK).send({
                message:'Ok'
            });
        }
    }
    created(res,data){
        return res.status(httpStatusCodes.StatusCodes.CREATED).send({message: 'Created',data:data});
    }
    updated(res,data){
        return res.status(httpStatusCodes.StatusCodes.OK).send({message: 'Updated',data:data});
    }
    deleted(res,data){
        return res.status(httpStatusCodes.StatusCodes.OK).send({message: 'Deleted',data:data});
    }
    unauthorized(res,message){
        return res.status(httpStatusCodes.StatusCodes.UNAUTHORIZED).send({message:'Unauthorized'});
    }
    forbidden(res,message){
        return res.status(httpStatusCodes.StatusCodes.FORBIDDEN).send({message: 'Forbidden: '+message});

    }
    notFound(res,message){
        return res.status(httpStatusCodes.StatusCodes.NOT_FOUND).send({message: 'Not Found: '+ message});

    }
    internalServerError(res,message){
        return res.status(httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR).send({
            message:'Internal Server Error: '+ message
        });
    }
    //common db operations
    getAll = (req,res)=>{
        this.repo.findAll().then(docs=>{
            return this.ok(res,docs);
        }).catch(err=>{
            return this.internalServerError(res,err);
        });
    }
    getById = (req,res)=>{
        let id =req.params.id;
        this.repo.findById(id).then(doc =>{
            return this.ok(res,doc);
        }).catch(err =>{
            return this.internalServerError(res,err);
        });
    }
    add = (req,res)=>{
        const body = req.body;
        this.repo.create(body).then(doc=>{
           return this.created(res,doc);
        }).catch(err=>{
            return this.internalServerError(res,err);
        });
    }
    update = (req, res) => {
        const id = req.params.id;
        const body = req.body;
    
        this.repo.update(id, body)
            .then(doc => {
                return this.updated(res, doc);
            })
            .catch(err => {
                return this.internalServerError(res, err);
            });
    };
    deleteById = (req,res)=>{
        let id = req.params.id;
        this.repo.deleteById(id)
        .then(doc => {
            return this.deleted(res, doc);
        })
        .catch(err => {
            return this.internalServerError(res, err);
        });
    }

}
module.exports=BaseController;