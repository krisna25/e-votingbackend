const Parpol = require('../models/Parpol');

module.exports = {
    async addParpol(req, res, next) {
        const {
            name,
            akronim,
            bendera,
            category,
        } = req.body;
        const ParpolSchema = await new Parpol({
            name,
            bendera,
            akronim,
            category,
        }).save();

        if (ParpolSchema) {
            res.sendStatus(200);
        }
    },
    async voteParpol(req, res, next) {

    },
    async updateParpol(req, res, next) {

    },
    async deleteParpol(req, res, next) {
        const deleteParpol = await Parpol.findByIdAndRemove({
            _id: req.body.id
        });
        if (deleteParpol) {
            return res.sendStatus('200');
        }
        return res.sendStatus('500');
    },
    async getAllParpol(req, res, next) {
        const result = await Parpol.find({}).populate({
            path: 'idParpol'
        });
        res.json(result);
    },
}