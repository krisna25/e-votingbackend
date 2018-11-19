const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteLifeCircleSchema = new Schema({
    status : {
        type: Number
    }
})

const VoteLifeCircle = mongoose.model('votelifecircle', VoteLifeCircleSchema);

module.exports = VoteLifeCircle;