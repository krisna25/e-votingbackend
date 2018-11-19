const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalegSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required: true
    },
    ktp: {
        type: Schema.Types.ObjectId,
        ref:"ktp"
    },
    idParpol: {
        type: Schema.Types.ObjectId,
        ref:"parpol"
    },
    vote: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});
const Caleg = mongoose.model('caleg', CalegSchema);

module.exports = Caleg;