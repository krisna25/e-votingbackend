const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const KtpSchema = new Schema({
   
    nik: {
        type: String,
        required: true,
        unique: true,
        required: true
    },
    kkId:{
        type:String,
        required:true
    },
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    rtrw: {
        type: String,
        required: true
    },
    keldes: {
        type: String,
        required: true
    },
    kecamatan: {
        type: String,
        required: true
    },
    kabkot: {
        type: String,
        required: true
    },
    golonganDarah: {
        type: String,
        required: true
    },
    jenisKelamin: {
        type: String,
        required: true
    },
    tempatTTL: {
        type: String,
        required: true
    },
    pekerjaan: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    kewarganegaraan: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    }
});
const Ktp = mongoose.model('ktp', KtpSchema);
KtpSchema.plugin(uniqueValidator);
module.exports = Ktp;