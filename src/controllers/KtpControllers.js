const Ktp = require('../models/Ktp');

module.exports = {

    async getAllKtp(req, res, next) {
        const result = await Ktp.find({}).populate({
            path: '_id'
        });
        res.json(result);
    },

    async getWhereKtp(req,res,next){
        const result = await Ktp.findOne({nik:req.body.ktp})
        if (result) {
            res.json(result);
        }else{
            res.sendStatus(404);
        }
  
    },

    async cekUserKTPbyKK(req,res,next){
        const result = await Ktp.find({kkId:req.body.noKkForgot})
        if (result.length !== 0) {
            res.json(result);
        }else{
            res.sendStatus(404);
        }
  
    },
}