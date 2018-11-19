const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    ktp: {
        type: Schema.Types.ObjectId,
        ref:"ktp"
    },
    noKtp: {
        type: String,
        unique: true,
        required: true
    },
    noKk: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
        default: 1
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: false,
    },
    log: {
        type: String,
        required: false,
    },
    updatedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

UserSchema.pre("save", function (next) {
    var user = this;
    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('user', UserSchema);

module.exports = User;