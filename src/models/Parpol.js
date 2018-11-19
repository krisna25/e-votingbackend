const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const ParpolSchema = new Schema({
    id: {
       type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    akronim: {
        type: String,
        required: true
    },
    bendera: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});
const Parpol= mongoose.model('parpol', ParpolSchema);

module.exports = Parpol;