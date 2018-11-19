const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteStatusSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    timeStart: {
        type: Date
    },
    timeEnd: {
        type: Date
    }
});

const VoteStatus = mongoose.model('votestatus',VoteStatusSchema)
module.exports = VoteStatus;