const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RekapSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    dapil: {
        type: String,
        required: true
    },vote:{
        type:Array,
        required:true
    },
    updatedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const Rekap = mongoose.model('rekap', RekapSchema);

module.exports = Rekap;