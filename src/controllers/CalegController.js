const Caleg = require('../models/Caleg');

module.exports = {
    async addCaleg(req, res, next) {
        const {
            idParpol,
            vote,
            ktp,
            name,
            img,
            category
        } = req.body;
        const CalegSchema = await new Caleg({
            idParpol,
            ktp,
            vote,
            img,
            name,
            category
        }).save();

        if (CalegSchema) {
            res.sendStatus(200);
        }
    },
    async getAllCaleg(req, res, next) {
        const result = await Caleg.find({}).populate({
            path: 'idParpol',
        }).populate({
            path: 'ktp',
        });
        res.json(result);
    },
    async getCalegDPRBanten1(req, res, next) {
        const result = await Caleg.find({category: 'Banten1'}).populate({
            path: 'idParpol'
        });
        res.json(result);
    },
    async getCalegDPRBanten2(req, res, next) {
        var data = 'c1'
        const result = await Caleg.find({'category' : 'Banten2'}, function(err, docs){
        }).populate({
            path: 'idParpol'
        }).populate({
            path: 'ktp'
        });
        res.json(result);
    },
    async getCalegDPRBanten3(req, res, next) {
        const result = await Caleg.find({'category' : 'Banten3'}, function(err, docs){
        }).populate({
            path: 'idParpol'
        });
        res.json(result);
    },
    async voteAllCaleg(req, res, next) {
        const voteCaleg = await Caleg.findByIdAndUpdate({
            _id: req.body.idCaleg
        }, {
            $inc: {
                vote: 1
            }
        })
        if (voteCaleg) {
            return res.sendStatus(200);
        }

        return res.sendStatus(500);
    },

    async getCalegById(req, res, next) {
        const result = await Caleg.find({_id: req.body.id}).populate({
            path: 'idParpol'
        });
        res.json(result);
    },
}