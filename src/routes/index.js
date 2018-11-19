const UserController = require("../controllers/UsersController");
const ParpolController = require("../controllers/ParpolController");
const CalegController = require("../controllers/CalegController");
const SeederController = require("../controllers/SeederController");
const KtpController = require('../controllers/KtpControllers');
const RekapitulasiController =  require('../controllers/RekapitulasiController');
const VoteStatusController = require('../controllers/VoteStatusController');

module.exports = (app) => {

    app.post('/api/signup', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/addLog', UserController.addLog);
    app.post('/api/add-caleg', CalegController.addCaleg);
    app.delete('/api/deleteParpol', ParpolController.deleteParpol)
    app.post('/api/add-parpol', ParpolController.addParpol);
    app.post('/api/voteAll-caleg', CalegController.voteAllCaleg);
    app.post('/api/addRandomKtp', SeederController.AddRandomKtp);
    app.post('/api/addRandomCaleg', SeederController.addRandomCaleg)
    app.post('/api/getCalegbyId', CalegController.getCalegById);
    app.post('/api/addVoteStatus',VoteStatusController.AddStatus);
    app.post('/api/getWhereKtp', KtpController.getWhereKtp);
    app.post('/api/cekKtpdanKK',UserController.UserbycekKtpandKK);
    app.post('/api/cekKtpRef',KtpController.cekUserKTPbyKK);
    app.post('/api/Rekapitulasi',RekapitulasiController.getbantenDPRRekapitulasi)
    app.post('/api/ForgotPassword',UserController.forgotPassword);  
    app.post('/api/getHashing',UserController.hashingPassword);  
    app.post('/api/updateTimeStatusVote',VoteStatusController.postStatusUpdate)
    app.post('/api/updateStatus',VoteStatusController.updateStatus);
    app.post('/api/updateStatusLifeCircle',VoteStatusController.updateLifeCircle);
    app.post('/api/rekapnewvote',RekapitulasiController.rekapnewvote);
    app.post('/api/kursiUpdate',RekapitulasiController.kursiUpdate);
    app.post('/api/pastikanCaleg',RekapitulasiController.pastikanCaleg);
    
    app.get('/api/getVoteLifeCircle', VoteStatusController.getVoteLifeCicle);
    app.get('/api/getkursi', RekapitulasiController.getkursi);
    app.get('/api/getRekapitulasi', RekapitulasiController.getAllbantenDPRRekapitulasi);
    app.get('/api/sitRekap', RekapitulasiController.sitRekap);
    app.get('/api/gethasilrekapkursi', RekapitulasiController.getRekapKursi);
    app.get('/api/getAllUsers', UserController.getAllUsers);
    app.get('/api/getStatusVote',VoteStatusController.getStatus)
    app.get('/api/getAllKtp', KtpController.getAllKtp);
    app.get('/api/getAllParpols', ParpolController.getAllParpol);
    app.get('/api/getAll-caleg', CalegController.getAllCaleg);
    app.get('/api/getcalegbanten1', CalegController.getCalegDPRBanten1);
    app.get('/api/getcalegbanten2', CalegController.getCalegDPRBanten2);
    app.get('/api/getcalegbanten3', CalegController.getCalegDPRBanten3);
    





}