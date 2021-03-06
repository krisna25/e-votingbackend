const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KursiSchema = new Schema({
    dapil:{
        type:String,
        required:true,
        index: true
    },
    kursi : {
        type: Number,
        required:true
    }
    
},{ autoCreate: true, autoIndexId: true})

const Kursi = mongoose.model('kursidprbanten', KursiSchema);

module.exports = Kursi;