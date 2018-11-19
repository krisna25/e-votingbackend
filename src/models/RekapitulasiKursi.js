const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RekapKursiSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },dapil: {
        type: String,
        required: true
    },hasil:{
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
const RekapKursi = mongoose.model('rekapkursi', RekapKursiSchema);

module.exports = RekapKursi;