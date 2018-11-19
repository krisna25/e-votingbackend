const User = require('../models/User');
const Ktp = require('../models/Ktp');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {
    async register(req, res, next) {
        const {
            noKtp,
            noKk,
            password,
            role,
        } = req.body;

        const CheckKtp = await Ktp.findOne({
            nik: noKtp,
            kkId: noKk,
        })

        if (CheckKtp) {
            const UserSchema = await new User({
                ktp: CheckKtp._id,
                noKtp,
                noKk,
                password,
                log: null,
                role
            }).save();

            if (UserSchema) {
                res.sendStatus(200);
            }
        } else {
            res.sendStatus(404)
        }
    },
    async login(req, res, next) {
        const {
            noKtp,
            noKk,
            password,
        } = req.body;
        try {
            //TODO: Login
            const theUser = await User.findOne({
                noKtp,
                noKk
            }).populate({
                path: 'ktp',
            });
            if (!theUser) {
                return res.sendStatus(404)
            }
            const match = await bcrypt.compare(password, theUser.password);
            if (!match) {
                return res.sendStatus(403)
            }
            const payload = {
                id: theUser.id
            }

            const token = jwt.sign(payload, keys.JWT_SECRET_KEY, {
                expiresIn: 7 * 24 * 60 * 60
            });

            //TODO: Sending Response
            res.send({
                data: {
                    token,
                    user: theUser
                },
                status: {
                    code: 200,
                    message: "Request Handle Corretly",
                    succeeded: true
                }
            })
        } catch (err) {
            next(err)
        }
    },
    async addLog(req, res, next) {
        const {
            idUser,
            newLog
        } = req.body;
        const addLog = await User.findByIdAndUpdate({
            _id: idUser
        }, {
            log: newLog
        })
        if (addLog) {
            return res.sendStatus(200);
        }
        return res.sendStatus(500);
    },

    async forgotPassword(req, res, next){
        const {noKtpForgot,passhashing } = req.body;
        var ktp = {noKtp: req.body.noKtpForgot}
        const postNewPassword = await User.findOneAndUpdate(ktp,{ $set: { password: req.body.passhashing }})
        if (postNewPassword) {
            return res.sendStatus(200)
        }else{
            return res.sendStatus(404)
        }
    },

    async hashingPassword(req, res, next) {
        var password = ""
        bcrypt.hash(req.body.newPassword, 10, function(err, hash) {
            res.send(hash)
        });
        
      
    },

    
    async UserbycekKtpandKK(req, res, next) {
        const result = await User.findOne({noKtp:req.body.noKtpForgot,noKk:req.body.noKkForgot}).populate({
            path: 'ktp',
        });
        if (result) {
            res.json(result);
        }else{
            res.sendStatus(404);
        }
    },

    async getAllUsers(req, res, next) {
        const result = await User.find({}).populate({
            path: 'ktp'
        });
        res.json(result);
    },

}