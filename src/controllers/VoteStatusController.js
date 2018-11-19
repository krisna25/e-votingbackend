const VoteStatus = require('../models/VoteStatus');
const VoteLifeCicle = require('../models/Votelivecicle');
const Kursi = require('../models/Kursi');
var moment = require('moment');
const Caleg = require("../models/Caleg");
const User = require("../models/User");
const Parpol = require("../models/Parpol");
const Rekapitulasi = require("../models/Rekapitulasi");
const RekapitulasiKursi = require("../models/RekapitulasiKursi");

const sainteLague = require("sainte-lague");
var Rekap = [];
var resultVote = [];
var RekapResult = [];
var sit = "";
var a = 0;
var calegRegionVote = [];
module.exports = {
    async AddStatus(req, res, next) {
        const {
            nama,
            status,
            timeStart,
            timeEnd
        } = req.body
        const VoteStatusSchema = await new VoteStatus({
            nama,
            status,
            timeStart,
            timeEnd
        }).save();

        if (VoteStatusSchema) {
            res.sendStatus(200);
        }
    },

    async getStatus(req, res, next) {
        var rekapStatus = false;
        const KursiAll = await Kursi.find({});
        
        const lifeCircle = await VoteLifeCicle.find({});
        var lifeCircleStatus = lifeCircle[0].status;
        var lifeCircleId = lifeCircle[0]._id;
      
        const result = await VoteStatus.find({});
        var panikButtonVote = result[3].status
        var panikButtonPublish = result[5].status
        const timeStartVote = result[1].timeStart
        const timeEndVote = result[1].timeEnd
        const timeStartPublish = result[2].timeStart
        const timeEndPublish = result[2].timeEnd
        const statusPublish = result[2].status

        var dateNow = moment();
        if (result.length !== 0) {
            if (timeStartPublish !== null && timeEndPublish !== null ){
                if (panikButtonPublish !== true ) {
                    if (moment(dateNow).isAfter(timeStartPublish) === true ) {
                        if (moment(dateNow).isAfter(timeEndPublish) === true ) {
                            //waktu publsih selesai
                            if(lifeCircleStatus === 3){
                                await VoteLifeCicle.findByIdAndUpdate({_id:lifeCircleId},{$set:{status:4}}) 
                            }
                            await VoteStatus.findByIdAndUpdate({_id:result[2]._id},{status:false,timeStart:null,timeEnd:null})

                        }else{
                            //waktu publish dimulai
                                await VoteStatus.findByIdAndUpdate({_id:result[2]._id},{status:true})
                           
                        }

                    }

                }  
            }
            if (timeStartVote !== null && timeEndVote !== null) {
                if (panikButtonVote !== true ) {
                    if (moment(dateNow).isAfter(timeStartVote) === true ) {
                        //ketika waktu voting selesai
                        if (moment(dateNow).isAfter(timeEndVote) === true && lifeCircleStatus === 1) {
                            //melakukan rekapitulasi
                            for (let index = 0; index < KursiAll.length; index++) {
                                const datakursi = KursiAll[index];
                                let kursi;
                                let dapil;
                                    if (datakursi.dapil === "Banten1") {
                                        kursi = datakursi.kursi
                                        dapil = datakursi.dapil
                                    }else if(datakursi.dapil === "Banten2"){
                                        kursi = datakursi.kursi
                                        dapil = datakursi.dapil
                                    }else if(datakursi.dapil === "Banten3"){
                                        kursi = datakursi.kursi
                                        dapil = datakursi.dapil
                                    }
                                    const dataParpol = await Parpol.find({});
                                    const dataCaleg = await Caleg.find({
                                        category: dapil
                                    });
                                    const userLog = await User.find({
                                        log: {
                                            $ne : null
                                        }
                                    })
                                    var totalVote = 0;
                                    var resultVoteFinal = {};

                                    if (dataCaleg.length == 0 || userLog.length == 0 || dataParpol.length == 0) {
                                        res.sendStatus(404);
                                    } else {
                                        dataParpol.forEach(parpol => {
                                            var countVote = 0;
                                            var calegGetVote = [];
                                            dataCaleg.forEach(caleg => {
                                                if (String(parpol._id) === String(caleg.idParpol)) {
                                                    var PandeglangVote = 0
                                                    var LebakVote = 0
                                                    var KabSerangVote = 0
                                                    var KabTangerangVote = 0
                                                    var KotTangerangVote = 0
                                                    var KotTangselVote = 0
                                                    var KotSerangVote = 0
                                                    var KotCilegonVote = 0
                                                    for (let index = 0; index < userLog.length; index++) {
                                                        var log = userLog[index].log;
                                                        str = log.split('/');
                                                        calegId = str[1];
                                                        var ktp = userLog[index].noKtp;
                                                        if (caleg._id == calegId) {
                                                            if (dapil == "Banten1") {
                                                                if (String(ktp).substring(2, 4) === '01') {
                                                                    PandeglangVote = PandeglangVote + 1
                                                                } else if (String(ktp).substring(2, 4) === '02') {
                                                                    LebakVote = LebakVote + 1
                                                                }
                                                            } else if (dapil == "Banten2") {
                                                                if (String(ktp).substring(2, 4) === '04') {
                                                                    KabSerangVote = KabSerangVote + 1
                                                                } else if (String(ktp).substring(2, 4) === '72') {
                                                                    KotCilegonVote = KotCilegonVote + 1
                                                                } else if (String(ktp).substring(2, 4) === '73') {
                                                                    KotSerangVote = KotSerangVote + 1
                                                                }
                                                            } else if (dapil == "Banten3") {
                                                                if (String(ktp).substring(2, 4) === '03') {
                                                                    KabTangerangVote = KabTangerangVote + 1
                                                                } else if (String(ktp).substring(2, 4) === '71') {
                                                                    KotTangerangVote = KotTangerangVote + 1
                                                                } else if (String(ktp).substring(2, 4) === '74') {
                                                                    KotTangselVote = KotTangselVote + 1
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (dapil == "Banten1") {
                                                        var vote = [];
                                                        vote['Padeglang'] = PandeglangVote;
                                                        vote['Lebak'] = LebakVote
                                                    
                                                        for (var key in vote) {
                                                            if (vote.hasOwnProperty(key)) {
                                                                calegRegionVote.push({
                                                                    'region': key,
                                                                    'idcaleg': caleg._id,
                                                                    'vote': vote[key]
                                                                })
                                                            }
                                                        }
                                                    } else if (dapil == "Banten2") {
                                                        var vote = [];
                                                        vote['Kota Serang'] = KotSerangVote;
                                                        vote['Kota Cilegon'] = KotCilegonVote;
                                                        vote['Serang'] = KabSerangVote;
                                                        for (var key in vote) {
                                                            if (vote.hasOwnProperty(key)) {
                                                                calegRegionVote.push({
                                                                    'region': key,
                                                                    'idcaleg': caleg._id,
                                                                    'vote': vote[key]
                                                                })
                                                            }
                                                        }
                                                    } else if (dapil == "Banten3") {
                                                        var vote = [];
                                                        vote['Kabupaten Tangerang'] = KabTangerangVote;
                                                        vote['Kota Tangerang'] = KotTangerangVote;
                                                        vote['Tangerang Selatan'] = KotTangselVote;
                                                        for (var key in vote) {
                                                            if (vote.hasOwnProperty(key)) {
                                                                calegRegionVote.push({
                                                                    'region': key,
                                                                    'idcaleg': caleg._id,
                                                                    'vote': vote[key]
                                                                })
                                                            }
                                                        }
                                                    }
                            
                                                    var temp = []
                                                    for (let index = 0; index < calegRegionVote.length; index++) {
                                                        if (caleg._id == calegRegionVote[index].idcaleg) {
                                                            temp.push({
                                                                'id':index,
                                                                'region': calegRegionVote[index].region,
                                                                'vote': calegRegionVote[index].vote,
                                                            })
                                                        }
                                                    }
                                                    calegGetVote.push({
                                                        'id': caleg._id,
                                                        'nama': caleg.name,
                                                        'vote': caleg.vote,
                                                        'img': caleg.img,
                                                        'descVote': temp
                                                    })
                                                    countVote = countVote + caleg.vote;
                                                }
                                            });
                                            totalVote = totalVote + countVote;
                                            resultVote.push({
                                                parpol: parpol.akronim,
                                                suara: countVote
                                            })

                                            Rekap.push({
                                                id : parpol._id,
                                                bendera:parpol.bendera,
                                                akronim: parpol.akronim,
                                                nama: parpol.name,
                                                vote: countVote,
                                                caleg: calegGetVote
                                            });
                                        });

                                        // cek parliamentary threshold dengan batas ambang  4 % dapil
                                            for (let index = 0; index < resultVote.length; index++) {
                                                const element = resultVote[index];
                                                if (Math.round((element.suara/totalVote)*100) >= 4 ) {
                                                    resultVoteFinal[element.parpol] = element.suara;
                                                }else{
                                                    resultVoteFinal[element.parpol] = 0;
                                                }
                                            }
                                        sit = sainteLague(resultVoteFinal, kursi);
                                        for (var key in sit) {
                                            if (sit.hasOwnProperty(key)) {
                                                RekapResult.push({
                                                    id: Rekap[a].id,
                                                    akronim: Rekap[a].akronim,
                                                    bendera:Rekap[a].bendera,
                                                    nama: Rekap[a].nama,
                                                    vote: Rekap[a].vote,
                                                    sits: sit[key],
                                                    caleg: Rekap[a].caleg
                                                });
                                                a = a + 1
                                            }
                                        }   
                                        
                                        const cekcaleg = await Rekapitulasi.findOne({dapil:dapil})
                                        if (cekcaleg) {
                                            const update = await Rekapitulasi.findOneAndUpdate({dapil:dapil},{$set: { "vote.0" :  RekapResult , 'updatedAt':moment()} })
                                            if (!update) {
                                                var arrstatus = [true,false,false]
                                                for (let index = 0; index < arrstatus.length; index++) {
                                                    const element = arrstatus[index];
                                                    if(index === 1){
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element,timeStart:null,timeEnd:null})
                                                    }else{
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element})
                                                    }
                                                }
                                                await VoteLifeCicle.findByIdAndUpdate({_id:lifeCircleId},{$set:{status:2}}) 
                                            }else{
                                                var arrstatus = [false,false,true]
                                                for (let index = 0; index < arrstatus.length; index++) {
                                                    const element = arrstatus[index];
                                                    if(index === 1){
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element,timeStart:null,timeEnd:null})
                                                    }else{
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element})
                                                    }
                                                }
                                                await VoteLifeCicle.findByIdAndUpdate({_id:lifeCircleId},{$set:{status:3}}) 
                                            }
                                        }else{
                                            var arr = []
                                            arr.push(RekapResult)
                                            const CalegRekapSchemaBantenNew= await new Rekapitulasi({
                                                dapil: dapil,
                                                vote: [RekapResult]
                                            }).save();
                                            if (!CalegRekapSchemaBantenNew) {
                                                var arrstatus = [true,false,false]
                                                for (let index = 0; index < arrstatus.length; index++) {
                                                    const element = arrstatus[index];
                                                    if(index === 1){
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element,timeStart:null,timeEnd:null})
                                                    }else{
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element})
                                                    }
                                                }
                                                await VoteLifeCicle.findByIdAndUpdate({_id:lifeCircleId},{$set:{status:2}}) 
                                            }else{
                                                var arrstatus = [false,false,true]
                                                for (let index = 0; index < arrstatus.length; index++) {
                                                    const element = arrstatus[index];
                                                    if(index === 1){
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element,timeStart:null,timeEnd:null})
                                                    }else{
                                                        await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element})
                                                    }
                                                }
                                                await VoteLifeCicle.findByIdAndUpdate({_id:lifeCircleId},{$set:{status:3}}) 
                                            }
                                        }
                                        a = 0;
                                        RekapResult = [];
                                        Rekap = [];
                                    }

                                }      
                                console.log("cek")
                                const rekapResult = await Rekapitulasi.find({});
                                var calegSits = [];
                                var arrResult = [];
                                var kursi = '';
                        
                                var banyakKursi = await Kursi.find({}); 
                                for (let index = 0; index < rekapResult.length; index++) {
                                    const rekap = rekapResult[index].vote[0];
                                    if (index === 0) {
                                        dapil = "Banten1"
                                        kursi = banyakKursi[index].kursi + 100;
                                    }else if (index === 1) {
                                        dapil = "Banten2"
                                        kursi = banyakKursi[index].kursi + 200;
                                    }else if (index === 2) {
                                        dapil = "Banten3"
                                        kursi = banyakKursi[index].kursi + 300;
                                    }
                                    function sortByCol(arr, colIndex){
                                        arr.sort(sortFunction)
                                        function sortFunction(a, b) {
                                            a = a[colIndex]
                                            b = b[colIndex]
                                            return (a === b) ? 0 : (a > b) ? -1 : 1
                                        }
                                    }
                                    var calegGetsitsResult = []
                                    for (
                                        let index = 0;
                                        index < rekap.length;
                                        index++ 
                                    ) {
                                        const element = rekap[index];
                                        var calegVoteSame = []
                                        if (element.sits !== 0) {
                                        for (let index = 0; index < element.caleg.length; index++) {
                                            if (element.caleg[index].vote !== 0) {
                                            calegSits.push([element.caleg[index].vote,element.caleg[index].nama,element.caleg[index].img,element.caleg[index].id,element.caleg[index].descVote])
                                            }
                                        }
                                        sortByCol(calegSits, 0)
                                        var gate = 0
                                        var sumOfsit = element.sits;
                                        for (let index = 0; index <= calegSits.length - 1; index++) {
                                        if (sumOfsit === 0) {
                                            break;
                                        }
                                        if (index === calegSits.length - 1) {
                                            if(gate === 1){
                                            calegVoteSame.push({'id':calegSits[index][3],'foto':calegSits[index][2],'nama':calegSits[index][1],'akronim':element.akronim,'bendera':element.bendera,'vote':calegSits[index][4]})
                                            if (sumOfsit === calegVoteSame.length ) {
                                                for (let index = 0; index < calegVoteSame.length; index++) {
                                                    calegVoteSame[index].idkursi = kursi
                                                    kursi = kursi - 1
                                                calegGetsitsResult.push(calegVoteSame[index])
                                                }
                                                sumOfsit = sumOfsit - calegVoteSame.length
                                            }else if(sumOfsit < calegVoteSame.length){
                                                calegGetsitsResult.push({'idkursi':kursi,'id':null,'foto':"",'nama':"Terdapat dua atau lebih caleg yang memperoleh suara sama untuk kursi ini, maka pemberian kursi juga ditentukan oleh berdasarkan sebaran data di daerah kabupaten/kota",'akronim':element.akronim,'bendera':element.bendera,'keterangan':"S",'data':calegVoteSame})
                                                sumOfsit = sumOfsit - 1;
                                                kursi = kursi - 1
                        
                                                break
                                            }
                                            }else if (gate === 0){
                                                calegGetsitsResult.push({'idkursi':kursi,'id':calegSits[index][3],'foto':calegSits[index][2],'nama':calegSits[index][1],'akronim':element.akronim,'bendera':element.bendera})
                                                kursi = kursi - 1
                                            }
                                        }else{
                                            if (calegSits[index][0] !== calegSits[index+1][0]) {
                                            if (gate === 0 ) {
                                                calegGetsitsResult.push({'idkursi':kursi,'id':calegSits[index][3],'foto':calegSits[index][2],'nama':calegSits[index][1],'akronim':element.akronim,'bendera':element.bendera})
                                                sumOfsit = sumOfsit - 1;
                                                kursi = kursi - 1
                        
                                            }else{
                                                calegVoteSame.push({'id':calegSits[index][3],'foto':calegSits[index][2],'nama':calegSits[index][1],'akronim':element.akronim,'bendera':element.bendera,'vote':calegSits[index][4]})
                                                if (sumOfsit === calegVoteSame.length ) {
                                                for (let index = 0; index < calegVoteSame.length; index++) {
                                                    calegVoteSame[index].idkursi = kursi
                                                    kursi = kursi - 1
                                                    calegGetsitsResult.push(calegVoteSame[index])
                                                    
                                                }
                                                sumOfsit = sumOfsit - calegVoteSame.length
                                                }else if(sumOfsit < calegVoteSame.length){
                                                calegGetsitsResult.push({'idkursi':kursi,'id':null,'foto':"",'nama':"Terdapat dua atau lebih caleg yang memperoleh suara sama untuk kursi ini, maka pemberian kursi juga ditentukan oleh sebaran data di daerah kabupaten/kota",'akronim':element.akronim,'bendera':element.bendera,'keterangan':"S",'data':calegVoteSame})
                                                sumOfsit = sumOfsit - 1;
                                                kursi = kursi - 1
                        
                                                break
                                                }
                                                gate = 0
                                            }
                                            }else{
                                            calegVoteSame.push({'id':calegSits[index][3],'foto':calegSits[index][2],'nama':calegSits[index][1],'akronim':element.akronim,'bendera':element.bendera,'vote':calegSits[index][4]})
                                            gate = 1
                                            }
                                        }
                                        }
                                        calegSits = []
                                        }
                                    }
                                    const cekdata = await RekapitulasiKursi.findOne({'dapil':dapil});
                                    if (cekdata) {
                                       const update = await RekapitulasiKursi.findOneAndUpdate({dapil:dapil},{$set: { "hasil" :  calegGetsitsResult , 'updatedAt':moment()} })
                                        if(!update){
                                            console.log("gagal update kursi")
                                        }else{
                                            console.log("berhasil update kursi")
                                        }
                                    }else{
                                       const add = await new RekapitulasiKursi({
                                           dapil:dapil,
                                           hasil:calegGetsitsResult
                                       }).save()
                                       if(add){
                                        console.log("berhasil add kursi")
                                       }else{
                                        console.log("gagal add kursi")
                                       }
                                    }
                                }
                        }else if(lifeCircleStatus === 0){
                            //ketika waktu voting dimulai
                            var arrstatus = [false,true,false]
                            for (let index = 0; index < arrstatus.length; index++) {
                                const element = arrstatus[index];
                                await VoteStatus.findByIdAndUpdate({_id:result[index]._id},{status:element})
                            }
                                await VoteLifeCicle.findByIdAndUpdate({_id:lifeCircleId},{$set:{status:1}}) 
                        }
                    }
                }
            }
        }                                 
        const resultUpdate = await VoteStatus.find({});
        res.json(resultUpdate);
    },

    async postStatusUpdate(req, res, next) {
        const result = await VoteStatus.findByIdAndUpdate({
            _id: req.body.id
        }, {
            timeStart: req.body.start,
            timeEnd: req.body.end
        })
        if (result) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    },

    async updateStatus(req, res, next) {
        const result = await VoteStatus.findByIdAndUpdate({
            _id: req.body.id
        }, {
            status: req.body.status,
        })
        if (result) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    },

    async updateLifeCircle(req,res,next){
        const result1 = await VoteLifeCicle.findByIdAndUpdate({
                _id: req.body.id
            }, {
                status: req.body.status,
            })
            if(result1){
                if(req.body.status === 0){
                 const result =   await User.updateMany(
                        {},
                        { $set: { "log" : null } },
                        {}
                    )
                  const result2 =  await Caleg.updateMany(
                        {},
                        { $set: { "vote" : 0 } },
                        {} 
                    )
                    if (result && result2) {
                        res.sendStatus(200);
                    } else {
                        res.sendStatus(404);
                    }
                }else{
                    res.sendStatus(200);
                }
            }else{
                res.sendStatus(404);
            }
    },

    async getVoteLifeCicle(req,res){
        const result = await VoteLifeCicle.find({});
        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    }
    
}