const Caleg = require('../models/Caleg');
const Ktp = require('../models/Ktp');
const Parpol = require('../models/Parpol');
const faker = require('faker');
faker.locale = "id_ID";

module.exports = {
    async AddRandomKtp(req, res, next) {
        var kecamatan = "";
        var kkID = "";
        var kelDes = "";
        var kotaOrKab = "";
        var RtRwResult = "";
        var pad = "0000";
        var padRtRw = "000";
        var a = 0; var randomA = 2; var countA = 1 ; var randomDateKK = faker.date.between('1950-01-01', '2006-01-01');
        var a1 = 0; var randomA1 = 2; var countA1 = 1 ; var randomDateKK11 = faker.date.between('1950-01-01', '2006-01-01');
        var a2 = 0; var randomA2 = 2; var countA2 = 1 ; var randomDateKK12 = faker.date.between('1950-01-01', '2006-01-01');
        var a3 = 0; var randomA3 = 2; var countA3 = 1 ; var randomDateKK13 = faker.date.between('1950-01-01', '2006-01-01');
        var b = 0; var randomB = 2; var countB = 1 ; var randomDateKK21 = faker.date.between('1950-01-01', '2006-01-01');
        var b1 = 0; var randomB1 = 2; var countB1 = 1 ; var randomDateKK22 = faker.date.between('1950-01-01', '2006-01-01');
        var b2 = 0; var randomB2 = 2; var countB2 = 1 ; var randomDateKK23 = faker.date.between('1950-01-01', '2006-01-01');
        var b3 = 0; var randomB3 = 2; var countB3 = 1 ; var randomDateKK24 = faker.date.between('1950-01-01', '2006-01-01');
        var c = 0; var randomC = 2; var countC = 1 ; var randomDateKK31 = faker.date.between('1950-01-01', '2006-01-01');
        var c1 = 0; var randomC1 = 2; var countC1 = 1 ; var randomDateKK32 = faker.date.between('1950-01-01', '2006-01-01');
        var c2 = 0; var randomC2 = 2; var countC2 = 1 ; var randomDateKK33 = faker.date.between('1950-01-01', '2006-01-01');
        var c3 = 0; var randomC3 = 2; var countC3 = 1 ; var randomDateKK34 = faker.date.between('1950-01-01', '2006-01-01');
        var d = 0; var randomD = 2; var countD = 1 ; var randomDateKK41 = faker.date.between('1950-01-01', '2006-01-01');
        var d1 = 0; var randomD1 = 2; var countD1 = 1 ; var randomDateKK42 = faker.date.between('1950-01-01', '2006-01-01');
        var d2 = 0; var randomD2 = 2; var countD2 = 1 ; var randomDateKK43 = faker.date.between('1950-01-01', '2006-01-01');
        var d3 = 0; var randomD3 = 2; var countD3 = 1 ; var randomDateKK44 = faker.date.between('1950-01-01', '2006-01-01');
        var e = 0; var randomE = 2; var countE = 1 ; var randomDateKK51 = faker.date.between('1950-01-01', '2006-01-01');
        var e1 = 0; var randomE1 = 2; var countE1 = 1 ; var randomDateKK52 = faker.date.between('1950-01-01', '2006-01-01');
        var e2 = 0; var randomE2 = 2; var countE2 = 1 ; var randomDateKK53 = faker.date.between('1950-01-01', '2006-01-01');
        var e3 = 0; var randomE3 = 2; var countE3 = 1 ; var randomDateKK54 = faker.date.between('1950-01-01', '2006-01-01');
        var f = 0; var randomF = 2; var countF = 1 ; var randomDateKK61 = faker.date.between('1950-01-01', '2006-01-01');
        var f1 = 0; var randomF1 = 2; var countF1 = 1 ; var randomDateKK62 = faker.date.between('1950-01-01', '2006-01-01');
        var f2 = 0; var randomF2 = 2; var countF2 = 1 ; var randomDateKK63 = faker.date.between('1950-01-01', '2006-01-01');
        var f3 = 0; var randomF3 = 2; var countF3 = 1 ; var randomDateKK64 = faker.date.between('1950-01-01', '2006-01-01');
        var g = 0; var randomG = 2; var countG = 1 ; var randomDateKK71 = faker.date.between('1950-01-01', '2006-01-01');
        var g1 = 0; var randomG1 = 2; var countG1 = 1 ; var randomDateKK72 = faker.date.between('1950-01-01', '2006-01-01');
        var g2 = 0; var randomG2 = 2; var countG2 = 1 ; var randomDateKK73 = faker.date.between('1950-01-01', '2006-01-01');
        var g3 = 0; var randomG3 = 2; var countG3 = 1 ; var randomDateKK74 = faker.date.between('1950-01-01', '2006-01-01');
        var h = 0; var randomH = 2; var countH = 1 ; var randomDateKK81 = faker.date.between('1950-01-01', '2006-01-01');
        var h1 = 0; var randomH1 = 2; var countH1 = 1 ; var randomDateKK82 = faker.date.between('1950-01-01', '2006-01-01');
        var h2 = 0; var randomH2 = 2; var countH2 = 1 ; var randomDateKK83 = faker.date.between('1950-01-01', '2006-01-01');
        var h3 = 0; var randomH3 = 2; var countH3 = 1 ; var randomDateKK84 = faker.date.between('1950-01-01', '2006-01-01');
        for (let index = 0; index < 1000; index++) {
            var randomBirthday = faker.date.between('1939-01-01', '2003-01-01');
            var Day = randomBirthday.getDate();
            var Month = randomBirthday.getMonth();
            var Year = randomBirthday.getFullYear();
            Month = Month + 1
            if (Day.toString().length === 1) {
                var Day = '0' + Day;
            } 
            if (Month.toString().length === 1) {
                var Month = '0' + Month;
            }
            var ktpNumber = index + 1;
            var ans = pad.substring(0, (pad.toString().length) - ktpNumber.toString().length) + ktpNumber.toString();
            var randomKotaId = faker.random.arrayElement(["36.01", "36.02", "36.03", "36.04", "36.71", "36.72", "36.73", "36.74"]);
            var kotasplit = randomKotaId.split('.');
            if (randomKotaId === "36.01") {
                kotaOrKab = "Kab. Pandegelang"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {  
                    kecamatan = "Sumur"
                    if (a !== randomA ) {
                        if (a === 0) {
                            var dateKKa = randomDateKK;
                            randomA = faker.random.number({min:1, max:4});
                            var randomRtA1 = faker.random.number({min: 1, max: 20})
                            var randomRwA1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans1 = pad.substring(0, (pad.toString().length) - countA.toString().length) + countA.toString();
                        var Day1 = dateKKa.getDate();
                        var Month1 = dateKKa.getMonth();
                        var Year1 = dateKKa.getFullYear();
                        Month1 = Month1 + 1
                        if (Day1.toString().length === 1) {
                            var Day1 = '0' + Day1;
                        }   
                        if (Month1.toString().length === 1) {
                            var Month1 = '0' + Month1;
                        }
                        var kkKabPdgl = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day1 + Month1 + Year1.toString().substring(2, 4)+ans1;
                        var ansRtA1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtA1.toString().length) + randomRtA1.toString();
                        var ansRwA1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwA1.toString().length) + randomRwA1.toString();
                        RtRwResult = ansRtA1 + '/' + ansRwA1;
                        kkID = kkKabPdgl;
                    } else if (a === randomA) {
                        a = -1;
                        randomA = 2;
                        countA++;
                    }
                    a++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "SumberJaya";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "KertaJaya";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "KertaMukti";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Cimanggung"
                    if (a1 !== randomA1 ) {
                        if (a1 === 0) {
                            var dateKKa11 = randomDateKK11;
                            randomA1 = faker.random.number({min:1, max:4});
                            var randomRtA11 = faker.random.number({min: 1, max: 20})
                            var randomRwA11 = faker.random.number({min: 1,max: 20})
                        }
                        
                        var ans11 = pad.substring(0, (pad.toString().length) - countA1.toString().length) + countA1.toString();
                        var Day11 = dateKKa11.getDate();
                        var Month11 = dateKKa11.getMonth();
                        var Year11 = dateKKa11.getFullYear();
                        Month11 = Month11 + 1
                        if (Day11.toString().length === 1) {
                            var Day11 = '0' + Day11;
                        }   
                        if (Month11.toString().length === 1) {
                            var Month11 = '0' + Month11;
                        }
                        var kkKabPdgl1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day11 + Month11 + Year11.toString().substring(2, 4)+ans11;
                        var ansRtA11 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtA11.toString().length) + randomRtA11.toString();
                        var ansRwA11 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwA11.toString().length) + randomRwA11.toString();
                        RtRwResult = ansRtA11 + '/' + ansRwA11;
                        kkID = kkKabPdgl1;
                    } else if (a1 === randomA1) {
                        a1 = -1;
                        randomA1 = 2;
                        countA1++;
                    }
                    a1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "RancaPinang";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Cibadak";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Tugu";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Cibaliung"
                    if (a2 !== randomA2 ) {
                        if (a2 === 0) {
                            var dateKKa12 = randomDateKK12;
                            randomA2 = faker.random.number({min:1, max:4});
                            var randomRtA12 = faker.random.number({min: 1, max: 20})
                            var randomRwA12 = faker.random.number({min: 1,max: 20})
                        }
                        var ans12 = pad.substring(0, (pad.toString().length) - countA2.toString().length) + countA2.toString();
                        var Day12= dateKKa12.getDate();
                        var Month12 = dateKKa12.getMonth();
                        var Year12= dateKKa12.getFullYear();
                        Month12 = Month12 + 1
                        if (Day12.toString().length === 1) {
                            var Day12 = '0' + Day12;
                        }   
                        if (Month12.toString().length === 1) {
                            var Month12 = '0' + Month12;
                        }
                        var kkKabPdg12 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day12 + Month12 + Year12.toString().substring(2, 4)+ans12;
                        var ansRtA12 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtA12.toString().length) + randomRtA12.toString();
                        var ansRwA12 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwA12.toString().length) + randomRwA12.toString();
                        RtRwResult = ansRtA12 + '/' + ansRwA12;
                        kkID = kkKabPdg12;
                    } else if (a2 === randomA2) {
                        a2 = -1;
                        randomA2 = 2;
                        countA2++;
                    }
                    a2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Mendung";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Sindangkerta";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Manglid";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Cikeusik"
                    if (a3 !== randomA3 ) {
                        console.log('masukk A3') 
                        if (a3 === 0) {
                            var dateKKa13 = randomDateKK13;
                            randomA3 = faker.random.number({min:1, max:4});
                            var randomRtA13 = faker.random.number({min: 1, max: 20})
                            var randomRwA13 = faker.random.number({min: 1,max: 20})
                        }
                        var ans13 = pad.substring(0, (pad.toString().length) - countA3.toString().length) + countA3.toString();
                        var Day13= dateKKa13.getDate();
                        var Month13 = dateKKa13.getMonth();
                        var Year13= dateKKa13.getFullYear();
                        Month13 = Month13 + 1
                        if (Day13.toString().length === 1) {
                            var Day13 = '0' + Day13;
                        }   
                        if (Month13.toString().length === 1) {
                            var Month13 = '0' + Month13;
                        }
                        var kkKabPdg13 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day13 + Month13 + Year13.toString().substring(2, 4)+ans13;
                        var ansRtA13 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtA13.toString().length) + randomRtA13.toString();
                        var ansRwA13 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwA13.toString().length) + randomRwA13.toString();
                        RtRwResult = ansRtA13 + '/' + ansRwA13;
                        kkID = kkKabPdg13;
                    } else if (a3 === randomA3) {
                        a3 = -1;
                        randomA3 = 2;
                        countA3++;
                    }
                    a3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Tanjungan";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Sumurbatu";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Sukawaris";
                    }
                }
            } 
            else if (randomKotaId === "36.02") {
                kotaOrKab = "Kab. Lebak"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);   
                if (randomKecamatanId === "01") {
                    kecamatan = "Malingping"
                    if (b !== randomB ) {
                        if (b === 0) {
                            var dateKKb = randomDateKK21;
                            randomB = faker.random.number({min:1, max:4});
                            var randomRtB = faker.random.number({min: 1, max: 20})
                            var randomRwB = faker.random.number({min: 1,max: 20})
                        }
                        var ans21 = pad.substring(0, (pad.toString().length) - countB.toString().length) + countB.toString();
                        var Day21 = dateKKb.getDate();
                        var Month21 = dateKKb.getMonth();
                        var Year21 = dateKKb.getFullYear();
                        Month21 = Month21 + 1
                        if (Day21.toString().length === 1) {
                            var Day21 = '0' + Day21;
                        }   
                        if (Month21.toString().length === 1) {
                            var Month21 = '0' + Month21;
                        }
                        var kkKablebak= kotasplit[0] + kotasplit[1] + randomKecamatanId + Day21 + Month21 + Year21.toString().substring(2, 4)+ans21;
                        var ansRtB = padRtRw.substring(0, (padRtRw.toString().length) - randomRtB.toString().length) + randomRtB.toString();
                        var ansRwB = padRtRw.substring(0, (padRtRw.toString().length) - randomRwB.toString().length) + randomRwB.toString();
                        RtRwResult = ansRtB + '/' + ansRwB;
                        kkID = kkKablebak;
                    } else if (b === randomB) {
                        b = -1;
                        randomB = 2;
                        countB++;
                    }
                    b++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Cilangkahan";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Pagelaran";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Sukaraja";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Panggarangan"
                    if (b1 !== randomB1 ) {
                        if (b1 === 0) {
                            var dateKKb1 = randomDateKK22;
                            randomB1 = faker.random.number({min:1, max:4});
                            var randomRtB1 = faker.random.number({min: 1, max: 20})
                            var randomRwB1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans22 = pad.substring(0, (pad.toString().length) - countB1.toString().length) + countB1.toString();
                        var Day22 = dateKKb1.getDate();
                        var Month22 = dateKKb1.getMonth();
                        var Year22 = dateKKb1.getFullYear();
                        Month22 = Month22 + 1
                        if (Day22.toString().length === 1) {
                            var Day22 = '0' + Day22;
                        }   
                        if (Month22.toString().length === 1) {
                            var Month22 = '0' + Month22;
                        }
                        var  kkKablebak1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day22 + Month22 + Year22.toString().substring(2, 4)+ans22;
                        var ansRtB1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtB1.toString().length) + randomRtB1.toString();
                        var ansRwB1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwB1.toString().length) + randomRwB1.toString();
                        RtRwResult = ansRtB1 + '/' + ansRwB1;
                        kkID =  kkKablebak1;
                    } else if (a === randomA) {
                        b1 = -1;
                        randomB1 = 2;
                        countB1++;
                    }
                    b1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Panggarangan";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Jatake";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Sogong";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Bayah"
                    if (b2 !== randomB2 ) {
                        if (b2 === 0) {
                            var dateKKb2 = randomDateKK23;
                            randomB2 = faker.random.number({min:1, max:4});
                            var randomRtB2 = faker.random.number({min: 1, max: 20})
                            var randomRwB2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans23 = pad.substring(0, (pad.toString().length) - countB2.toString().length) + countB2.toString();
                        var Day23 = dateKKb2.getDate();
                        var Month23 = dateKKb2.getMonth();
                        var Year23 = dateKKb2.getFullYear();
                        Month23 = Month23 + 1
                        if (Day23.toString().length === 1) {
                            var Day23 = '0' + Day23;
                        }   
                        if (Month23.toString().length === 1) {
                            var Month23 = '0' + Month23;
                        }
                        var kkKablebak2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day23 + Month23 + Year23.toString().substring(2, 4)+ans23;
                        var ansRtB2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtB2.toString().length) + randomRtB2.toString();
                        var ansRwB2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwB2.toString().length) + randomRwB2.toString();
                        RtRwResult = ansRtB2 + '/' + ansRwB2;
                        kkID = kkKablebak2;
                    } else if (b2 === randomB2) {
                        b2 = -1;
                        randomB2 = 2;
                        countB2++;
                    }
                    b2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Bayah Barat";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Sawarna";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Cidikit";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Cipanas"
                    if (b3 !== randomB3 ) {
                        if (b3 === 0) {
                            var dateKKb3 = randomDateKK24;
                            randomB3 = faker.random.number({min:1, max:4});
                            var randomRtB3 = faker.random.number({min: 1, max: 20})
                            var randomRwB3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans24 = pad.substring(0, (pad.toString().length) - countB3.toString().length) + countB3.toString();
                        var Day24= dateKKb3.getDate();
                        var Month24 = dateKKb3.getMonth();
                        var Year24 = dateKKb3.getFullYear();
                        Month24 = Month24 + 1
                        if (Day24.toString().length === 1) {
                            var Day24 = '0' + Day24;
                        }   
                        if (Month24.toString().length === 1) {
                            var Month24 = '0' + Month24;
                        }
                        var kkKablebak3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day24 + Month24 + Year24.toString().substring(2, 4)+ans24;
                        var ansRtB3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtB3.toString().length) + randomRtB3.toString();
                        var ansRwB3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwB3.toString().length) + randomRwB3.toString();
                        RtRwResult = ansRtB3 + '/' + ansRwB3;
                        kkID = kkKablebak3;
                    } else if (b3 === randomB3) {
                        b3 = -1;
                        randomB3 = 2;
                        countB3++;
                    }
                    b3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Cipanas";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Girilaya";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Malangsari";
                    }
                }
            } else if (randomKotaId === "36.03") {
                kotaOrKab = "Kab. Tangerang"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {
                    kecamatan = "Balaraja"
                    if (c !== randomC ) {
                        if (c === 0) {
                            var dateKKc = randomDateKK31;
                            randomC = faker.random.number({min:1, max:4});
                            var randomRtC = faker.random.number({min: 1, max: 20})
                            var randomRwC = faker.random.number({min: 1,max: 20})
                        }
                       
                        var ans31 = pad.substring(0, (pad.toString().length) - countC.toString().length) + countC.toString();
                        var Day31 = dateKKc.getDate();
                        var Month31 = dateKKc.getMonth();
                        var Year31 = dateKKc.getFullYear();
                        Month31 = Month31 + 1
                        if (Day31.toString().length === 1) {
                            var Day31 = '0' + Day31;
                        }   
                        if (Month31.toString().length === 1) {
                            var Month31 = '0' + Month31;
                        }
                        var kkKabTngrg = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day31 + Month31 + Year31.toString().substring(2, 4)+ans31;
                        var ansRtC = padRtRw.substring(0, (padRtRw.toString().length) - randomRtC.toString().length) + randomRtC.toString();
                        var ansRwC = padRtRw.substring(0, (padRtRw.toString().length) - randomRwC.toString().length) + randomRwC.toString();
                        RtRwResult = ansRtC + '/' + ansRwC;
                        kkID = kkKabTngrg;
                    } else if (c === randomC) {
                        c = -1;
                        randomC = 2;
                        countC++;
                    }
                    c++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Peucangpari";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Cibungkur";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Mugijaya";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Jayanti"
                    if (c1 !== randomC1 ) {
                        if (c === 0) {
                            var dateKKc1 = randomDateKK32;
                            randomC1 = faker.random.number({min:1, max:4});
                            var randomRtC1 = faker.random.number({min: 1, max: 20})
                            var randomRwC1 = faker.random.number({min: 1,max: 20})
                        }
                    
                        var ans32 = pad.substring(0, (pad.toString().length) - countC1.toString().length) + countC1.toString();
                        var Day32 = dateKKc1.getDate();
                        var Month32 = dateKKc1.getMonth();
                        var Year32 = dateKKc1.getFullYear();
                        Month32 = Month32 + 1
                        if (Day32.toString().length === 1) {
                            var Day32 = '0' + Day32;
                        }   
                        if (Month32.toString().length === 1) {
                            var Month32 = '0' + Month32;
                            
                        }
                        var kkKabTngrg1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day32 + Month32 + Year32.toString().substring(2, 4)+ans32;
                        var ansRtC1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtC1.toString().length) + randomRtC1.toString();
                        var ansRwC1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwC1.toString().length) + randomRwC1.toString();
                        RtRwResult = ansRtC1 + '/' + ansRwC1;
                        kkID = kkKabTngrg1;
                    } else if (c1 === randomC1) {
                        c1 = -1;
                        randomC1 = 2;
                        countC1++;
                    }
                    c1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Pangkat";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Pabuaran";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pasir Muncang";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Tigaraksa"
                    if (c2 !== randomC2 ) {
                        if (c2 === 0) {
                            var dateKKc2 = randomDateKK33;
                            randomC2 = faker.random.number({min:1, max:4});
                            var randomRtC2 = faker.random.number({min: 1, max: 20})
                            var randomRwC2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans33 = pad.substring(0, (pad.toString().length) - countC2.toString().length) + countC2.toString();
                        var Day33 = dateKKc2.getDate();
                        var Month33 = dateKKc2.getMonth();
                        var Year33 = dateKKc2.getFullYear();
                        Month33 = Month33 + 1
                        if (Day33.toString().length === 1) {
                            var Day33 = '0' + Day33;
                        }   
                        if (Month33.toString().length === 1) {
                            var Month33 = '0' + Month33;
                        }
                        var kkKabTngrg2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day33 + Month33 + Year33.toString().substring(2, 4)+ans33;
                        var ansRtC2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtC2.toString().length) + randomRtC2.toString();
                        var ansRwC2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwC2.toString().length) + randomRwC2.toString();
                        RtRwResult = ansRtC2 + '/' + ansRwC2;
                        kkID = kkKabTngrg2;
                    } else if (c2 === randomC2) {
                        c2 = -1;
                        randomC2 = 2;
                        countC2++;
                    }
                    c2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Pasir Bolang";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Matagara";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pasir Nangka";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Jambe"
                    if (c3 !== randomC3 ) {
                        if (c3 === 0) {
                            var dateKKc3 = randomDateKK34;
                            randomC3 = faker.random.number({min:1, max:4});
                            var randomRtC3 = faker.random.number({min: 1, max: 20})
                            var randomRwC3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans34 = pad.substring(0, (pad.toString().length) - countC3.toString().length) + countC3.toString();
                        var Day34 = dateKKc3.getDate();
                        var Month34 = dateKKc3.getMonth();
                        var Year34 = dateKKc3.getFullYear();
                        Month34 = Month34 + 1
                        if (Day34.toString().length === 1) {
                            var Day34 = '0' + Day34;
                        }   
                        if (Month34.toString().length === 1) {
                            var Month34 = '0' + Month34;
                        }
                        var kkKabTngrg3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day34 + Month34 + Year34.toString().substring(2, 4)+ans34;
                        var ansRtC3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtC3.toString().length) + randomRtC3.toString();
                        var ansRwC3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwC3.toString().length) + randomRwC3.toString();
                        RtRwResult = ansRtC3 + '/' + ansRwC3;
                        kkID = kkKabTngrg3;
                    } else if (c3 === randomC3) {
                        c3 = -1;
                        randomC3 = 2;
                        countC3++;
                    }
                    c3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Sukamanah";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Jambe";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Tipar Raya";
                    }
                }
            } else if (randomKotaId === "36.04") {
                kotaOrKab = "Kab. Serang"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {
                    kecamatan = "Serang"
                    if (d !== randomD ) {
                        if (d === 0) {
                            var dateKKd = randomDateKK41;
                            randomD = faker.random.number({min:1, max:4});
                            var randomRtD = faker.random.number({min: 1, max: 20})
                            var randomRwD = faker.random.number({min: 1,max: 20})
                        }
                        var ans41 = pad.substring(0, (pad.toString().length) - countD.toString().length) + countD.toString();
                        var Day41 = dateKKd.getDate();
                        var Month41 = dateKKd.getMonth();
                        var Year41 = dateKKd.getFullYear();
                        Month41 = Month41 + 1
                        if (Day41.toString().length === 1) {
                            var Day41 = '0' + Day41;
                        }   
                        if (Month41.toString().length === 1) {
                            var Month41 = '0' + Month41;
                        }
                        var kkKabSerang = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day41 + Month41 + Year41.toString().substring(2, 4)+ans41;
                        var ansRtD = padRtRw.substring(0, (padRtRw.toString().length) - randomRtD.toString().length) + randomRtD.toString();
                        var ansRwD = padRtRw.substring(0, (padRtRw.toString().length) - randomRwD.toString().length) + randomRwD.toString();
                        RtRwResult = ansRtD + '/' + ansRwD;
                        kkID = kkKabSerang;
                    } else if (d === randomD) {
                        d = -1;
                        randomD = 2;
                        countD++;
                    }
                    d++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Serang";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Cipare";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Sumur Pecung";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Cipocok Jaya"
                    if (d1 !== randomD1 ) {
                        if (d1 === 0) {
                            var dateKKd1 = randomDateKK42;
                            randomD1 = faker.random.number({min:1, max:4});
                            var randomRtD1 = faker.random.number({min: 1, max: 20})
                            var randomRwD1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans42 = pad.substring(0, (pad.toString().length) - countD1.toString().length) + countD1.toString();
                        var Day42 = dateKKd1.getDate();
                        var Month42 = dateKKd1.getMonth();
                        var Year42 = dateKKd1.getFullYear();
                        Month42 = Month42 + 1
                        if (Day42.toString().length === 1) {
                            var Day42 = '0' + Day42;
                        }   
                        if (Month42.toString().length === 1) {
                            var Month42 = '0' + Month42;
                        }
                        var kkKabSerang1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day42 + Month42 + Year42.toString().substring(2, 4)+ans42;
                        var ansRtD1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtD1.toString().length) + randomRtD1.toString();
                        var ansRwD1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwD1.toString().length) + randomRwD1.toString();
                        RtRwResult = ansRtD1 + '/' + ansRwD1;
                        kkID = kkKabSerang1;
                    } else if (d1 === randomD1) {
                        d1 = -1;
                        randomD1 = 2;
                        countD1++;
                    }
                    d1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Cipocok Jaya";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Karundang";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pamancangan";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Kasemen"
                    if (d2 !== randomD2 ) {
                        if (d2 === 0) {
                            var dateKKd2 = randomDateKK43;
                            randomD2 = faker.random.number({min:1, max:4});
                            var randomRtD2 = faker.random.number({min: 1, max: 20})
                            var randomRwD2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans43 = pad.substring(0, (pad.toString().length) - countD2.toString().length) + countD2.toString();
                        var Day43 = dateKKd2.getDate();
                        var Month43 = dateKKd2.getMonth();
                        var Year43 = dateKKd2.getFullYear();
                        Month43 = Month43 + 1
                        if (Day43.toString().length === 1) {
                            var Day43 = '0' + Day43;
                        }   
                        if (Month43.toString().length === 1) {
                            var Month43 = '0' + Month43;
                        }
                        var kkKabSerang2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day43 + Month43 + Year43.toString().substring(2, 4)+ans43;
                        var ansRtD2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtD2.toString().length) + randomRtD2.toString();
                        var ansRwD2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwD2.toString().length) + randomRwD2.toString();
                        RtRwResult = ansRtD2 + '/' + ansRwD2;
                        kkID = kkKabSerang2;
                    } else if (d2 === randomD2) {
                        d2 = -1;
                        randomD2 = 2;
                        countD2++;
                    }
                    d2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Kasemen";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Masjid Priyayi";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Turumbu";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Taktakan"
                    if (d3 !== randomD3 ) {
                        if (d3 === 0) {
                            var dateKKd3 = randomDateKK44;
                            randomD3 = faker.random.number({min:1, max:4});
                            var randomRtD3 = faker.random.number({min: 1, max: 20})
                            var randomRwD3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans44 = pad.substring(0, (pad.toString().length) - countD3.toString().length) + countD3.toString();
                        var Day44 = dateKKd3.getDate();
                        var Month44 = dateKKd3.getMonth();
                        var Year44 = dateKKd3.getFullYear();
                        Month44 = Month44 + 1
                        if (Day44.toString().length === 1) {
                            var Day44 = '0' + Day44;
                        }   
                        if (Month44.toString().length === 1) {
                            var Month44 = '0' + Month44;
                        }
                        var kkKabSerang3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day44 + Month44 + Year44.toString().substring(2, 4)+ans44;
                        var ansRtD3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtD3.toString().length) + randomRtD3.toString();
                        var ansRwD3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwD3.toString().length) + randomRwD3.toString();
                        RtRwResult = ansRtD3 + '/' + ansRwD3;
                        kkID = kkKabSerang3;
                    } else if (d3 === randomD3) {
                        d3 = -1;
                        randomD3 = 2;
                        countD3++;
                    }
                    d3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Taktakan";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Sayar";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pancur";
                    }
                }
            } else if (randomKotaId === "36.71") {
                kotaOrKab = "Kota Tangerang"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {
                    kecamatan = "Tangerang"
                    if (e !== randomE ) {
                        if (e === 0) {
                            var dateKKe = randomDateKK51;
                            randomE = faker.random.number({min:1, max:4});
                            var randomRtE = faker.random.number({min: 1, max: 20})
                            var randomRwE = faker.random.number({min: 1,max: 20})
                        }
                        var ans51 = pad.substring(0, (pad.toString().length) - countE.toString().length) + countE.toString();
                        var Day51 = dateKKe.getDate();
                        var Month51 = dateKKe.getMonth();
                        var Year51 = dateKKe.getFullYear();
                        Month51 = Month51 + 1
                        if (Day51.toString().length === 1) {
                            var Day51 = '0' + Day51;
                        }   
                        if (Month51.toString().length === 1) {
                            var Month51 = '0' + Month51;
                        }
                        var kkKotTngrg = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day51 + Month51 + Year51.toString().substring(2, 4)+ans51;
                        var ansRtE = padRtRw.substring(0, (padRtRw.toString().length) - randomRtE.toString().length) + randomRtE.toString();
                        var ansRwE = padRtRw.substring(0, (padRtRw.toString().length) - randomRwE.toString().length) + randomRwE.toString();
                        RtRwResult = ansRtE + '/' + ansRwE;
                        kkID = kkKotTngrg;
                    } else if (e === randomE) {
                        e = -1;
                        randomE = 2;
                        countE++;
                    }
                    e++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Sukarasa";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Sikaasih";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Tanah Tinggi";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Jatiuwung"
                    if (e1 !== randomE1 ) {
                        if (e1 === 0) {
                            var dateKKe1 = randomDateKK52;
                            randomE1 = faker.random.number({min:1, max:4});
                            var randomRtE1 = faker.random.number({min: 1, max: 20})
                            var randomRwE1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans52 = pad.substring(0, (pad.toString().length) - countE1.toString().length) + countE1.toString();
                        var Day52 = dateKKe1.getDate();
                        var Month52 = dateKKe1.getMonth();
                        var Year52 = dateKKe1.getFullYear();
                        Month52 = Month52 + 1
                        if (Day52.toString().length === 1) {
                            var Day52 = '0' + Day52;
                        }   
                        if (Month52.toString().length === 1) {
                            var Month52 = '0' + Month52;
                        }
                        var kkKotTngrg1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day52 + Month52 + Year52.toString().substring(2, 4)+ans52;
                        var ansRtE1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtE1.toString().length) + randomRtE1.toString();
                        var ansRwE1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwE1.toString().length) + randomRwE1.toString();
                        RtRwResult = ansRtE1 + '/' + ansRwE1;
                        kkID = kkKotTngrg1;
                    } else if (e1 === randomE1) {
                        e1 = -1;
                        randomE1 = 2;
                        countE1++;
                    }
                    e1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Keroncong";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Jatake";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pasir Jaya";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Batuceper"
                    if (e2 !== randomE2 ) {
                        if (e2 === 0) {
                            var dateKKe2 = randomDateKK53;
                            randomE2 = faker.random.number({min:1, max:4});
                            var randomRtE2 = faker.random.number({min: 1, max: 20})
                            var randomRwE2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans53 = pad.substring(0, (pad.toString().length) - countE2.toString().length) + countE2.toString();
                        var Day53 = dateKKe2.getDate();
                        var Month53 = dateKKe2.getMonth();
                        var Year53 = dateKKe2.getFullYear();
                        Month53 = Month53 + 1
                        if (Day53.toString().length === 1) {
                            var Day53 = '0' + Day53;
                        }   
                        if (Month53.toString().length === 1) {
                            var Month53 = '0' + Month53;
                        }
                        var kkKotTngrg2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day53 + Month53 + Year53.toString().substring(2, 4)+ans53;
                        var ansRtE2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtE2.toString().length) + randomRtE2.toString();
                        var ansRwE2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwE2.toString().length) + randomRwE2.toString();
                        RtRwResult = ansRtE2 + '/' + ansRwE2;
                        kkID = kkKotTngrg2;
                    } else if (e2 === randomE2) {
                        e2 = -1;
                        randomE2 = 2;
                        countE2++;
                    }
                    e2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Batuceper";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Batujaya";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Poris Gaga";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Benda"
                    if (e3 !== randomE3 ) {
                        if (e3 === 0) {
                            var dateKKe3 = randomDateKK54;
                            randomE3 = faker.random.number({min:1, max:4});
                            var randomRtE3 = faker.random.number({min: 1, max: 20})
                            var randomRwE3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans54 = pad.substring(0, (pad.toString().length) - countE3.toString().length) + countE3.toString();
                        var Day54 = dateKKe3.getDate();
                        var Month54 = dateKKe3.getMonth();
                        var Year54 = dateKKe3.getFullYear();
                        Month54 = Month54 + 1
                        if (Day54.toString().length === 1) {
                            var Day54 = '0' + Day54;
                        }   
                        if (Month54.toString().length === 1) {
                            var Month54 = '0' + Month54;
                        }
                        var kkKotTngrg3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day54 + Month54 + Year54.toString().substring(2, 4)+ans54;
                        var ansRtE3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtE3.toString().length) + randomRtE3.toString();
                        var ansRwE3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwE3.toString().length) + randomRwE3.toString();
                        RtRwResult = ansRtE3 + '/' + ansRwE3;
                        kkID = kkKotTngrg3;
                    } else if (e3 === randomE3) {
                        e3 = -1;
                        randomE3 = 2;
                        countE3++;
                    }
                    e3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Belendung";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Jurumudi";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Benda";
                    }
                }
            } else if (randomKotaId === "36.72") {
                kotaOrKab = "Kota Cilegon"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {
                    kecamatan = "Cibeber"
                    if (f !== randomF ) {
                        if (f === 0) {
                            var dateKKf = randomDateKK61;
                            randomF = faker.random.number({min:1, max:4});
                            var randomRtF = faker.random.number({min: 1, max: 20})
                            var randomRwF = faker.random.number({min: 1,max: 20})
                        }
                        var ans61 = pad.substring(0, (pad.toString().length) - countF.toString().length) + countF.toString();
                        var Day61 = dateKKf.getDate();
                        var Month61 = dateKKf.getMonth();
                        var Year61 = dateKKf.getFullYear();
                        Month61 = Month61 + 1
                        if (Day61.toString().length === 1) {
                            var Day61 = '0' + Day61;
                        }   
                        if (Month61.toString().length === 1) {
                            var Month61 = '0' + Month61;
                        }
                        var kkKotCilegon = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day61 + Month61 + Year61.toString().substring(2, 4)+ans61;
                        var ansRtF = padRtRw.substring(0, (padRtRw.toString().length) - randomRtF.toString().length) + randomRtF.toString();
                        var ansRwF = padRtRw.substring(0, (padRtRw.toString().length) - randomRwF.toString().length) + randomRwF.toString();
                        RtRwResult = ansRtF + '/' + ansRwF;
                        kkID = kkKotCilegon;
                    } else if (f === randomF) {
                        f = -1;
                        randomF = 2;
                        countF++;
                    }
                    f++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Cibeber";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Kedaleman";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Belukan";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Cilegon"
                    if (f1 !== randomF1 ) {
                        if (f1 === 0) {
                            var dateKKf1 = randomDateKK62;
                            randomF1 = faker.random.number({min:1, max:4});
                            var randomRtF1 = faker.random.number({min: 1, max: 20})
                            var randomRwF1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans62 = pad.substring(0, (pad.toString().length) - countF1.toString().length) + countF1.toString();
                        var Day62 = dateKKf1.getDate();
                        var Month62 = dateKKf1.getMonth();
                        var Year62 = dateKKf1.getFullYear();
                        Month62 = Month62 + 1
                        if (Day62.toString().length === 1) {
                            var Day62 = '0' + Day62;
                        }   
                        if (Month62.toString().length === 1) {
                            var Month62 = '0' + Month62;
                        }
                        var kkKotCilegon1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day62 + Month62 + Year62.toString().substring(2, 4)+ans62;
                        var ansRtF1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtF1.toString().length) + randomRtF1.toString();
                        var ansRwF1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwF1.toString().length) + randomRwF1.toString();
                        RtRwResult = ansRtF1 + '/' + ansRwF1;
                        kkID = kkKotCilegon1;
                    } else if (f1 === randomF1) {
                        f1 = -1;
                        randomF1 = 2;
                        countF1++;
                    }
                    f1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Begendung";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Ciwedus";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Bendungan";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Pulomerak"
                    if (f2 !== randomF2 ) {
                        if (f2 === 0) {
                            var dateKKf2 = randomDateKK63;
                            randomF2 = faker.random.number({min:1, max:4});
                            var randomRtF2 = faker.random.number({min: 1, max: 20})
                            var randomRwF2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans63 = pad.substring(0, (pad.toString().length) - countF2.toString().length) + countF2.toString();
                        var Day63 = dateKKf2.getDate();
                        var Month63 = dateKKf2.getMonth();
                        var Year63 = dateKKf2.getFullYear();
                        Month63 = Month63 + 1
                        if (Day63.toString().length === 1) {
                            var Day63 = '0' + Day63;
                        }   
                        if (Month63.toString().length === 1) {
                            var Month63 = '0' + Month63;
                        }
                        var kkKotCilegon2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day63 + Month63 + Year63.toString().substring(2, 4)+ans63;
                        var ansRtF2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtF2.toString().length) + randomRtF2.toString();
                        var ansRwF2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwF2.toString().length) + randomRwF2.toString();
                        RtRwResult = ansRtF2 + '/' + ansRwF2;
                        kkID = kkKotCilegon2;
                    } else if (f2 === randomF2) {
                        f2 = -1;
                        randomF2 = 2;
                        countF2++;
                    }
                    f2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Tamansari";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Lebakgede";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Mekarsari";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Ciwanda"
                    if (f3 !== randomF3 ) {
                        if (f3 === 0) {
                            var dateKKf3 = randomDateKK64;
                            randomF3 = faker.random.number({min:1, max:4});
                            var randomRtF3 = faker.random.number({min: 1, max: 20})
                            var randomRwF3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans64 = pad.substring(0, (pad.toString().length) - countF3.toString().length) + countF3.toString();
                        var Day64 = dateKKf3.getDate();
                        var Month64 = dateKKf3.getMonth();
                        var Year64 = dateKKf3.getFullYear();
                        Month64 = Month64 + 1
                        if (Day64.toString().length === 1) {
                            var Day64 = '0' + Day64;
                        }   
                        if (Month64.toString().length === 1) {
                            var Month64 = '0' + Month64;
                        }
                        var kkKotCilegon3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day64 + Month64 + Year64.toString().substring(2, 4)+ans64;
                        var ansRtF3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtF3.toString().length) + randomRtF3.toString();
                        var ansRwF3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwF3.toString().length) + randomRwF3.toString();
                        RtRwResult = ansRtF3 + '/' + ansRwF3;
                        kkID = kkKotCilegon3;
                    } else if (f3 === randomF3) {
                        f3 = -1;
                        randomF3 = 2;
                        countF3++;
                    }
                    f3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Banjar Negara";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Tegal Ratu";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Kubangsari";
                    }
                }Serang
            } else if (randomKotaId === "36.73") {
                kotaOrKab = "Kota "
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {
                    kecamatan = "Serang"
                    if (g !== randomG ) {
                        if (g === 0) {
                            var dateKKg = randomDateKK71;
                            randomG = faker.random.number({min:1, max:4});
                            var randomRtG = faker.random.number({min: 1, max: 20})
                            var randomRwG = faker.random.number({min: 1,max: 20})
                        }
                        var ans71 = pad.substring(0, (pad.toString().length) - countG.toString().length) + countG.toString();
                        var Day71 = dateKKg.getDate();
                        var Month71 = dateKKg.getMonth();
                        var Year71 = dateKKg.getFullYear();
                        Month71 = Month71 + 1
                        if (Day71.toString().length === 1) {
                            var Day71 = '0' + Day71;
                        }   
                        if (Month71.toString().length === 1) {
                            var Month71 = '0' + Month71;
                        }
                        var kkKotSerang = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day71 + Month71 + Year71.toString().substring(2, 4)+ans71;
                        var ansRtG = padRtRw.substring(0, (padRtRw.toString().length) - randomRtG.toString().length) + randomRtG.toString();
                        var ansRwG = padRtRw.substring(0, (padRtRw.toString().length) - randomRwG.toString().length) + randomRwG.toString();
                        RtRwResult = ansRtG + '/' + ansRwG;
                        kkID = kkKotSerang;
                    } else if (g === randomG) {
                        g = -1;
                        randomG = 2;
                        countG++;
                    }
                    g++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Serang";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Cipare";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Sumur Pencung";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Kasemen"
                    if (g1 !== randomG1 ) {
                        if (g1 === 0) {
                            var dateKKg1 = randomDateKK72;
                            randomG1 = faker.random.number({min:1, max:4});
                            var randomRtG1 = faker.random.number({min: 1, max: 20})
                            var randomRwG1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans72 = pad.substring(0, (pad.toString().length) - countG1.toString().length) + countG1.toString();
                        var Day72 = dateKKg1.getDate();
                        var Month72 = dateKKg1.getMonth();
                        var Year72 = dateKKg1.getFullYear();
                        Month72= Month72 + 1
                        if (Day72.toString().length === 1) {
                            var Day72 = '0' + Day72;
                        }   
                        if (Month72.toString().length === 1) {
                            var Month72 = '0' + Month72;
                        }
                        var kkKotSerang1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day72 + Month72 + Year72.toString().substring(2, 4)+ans72;
                        var ansRtG1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtG1.toString().length) + randomRtG1.toString();
                        var ansRwG1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwG1.toString().length) + randomRwG1.toString();
                        RtRwResult = ansRtG1 + '/' + ansRwG1;
                        kkID = kkKotSerang1;
                    } else if (g1 === randomG1) {
                        g1 = -1;
                        randomG1 = 2;
                        countG1++;
                    }
                    g1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Kasemen";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Masjid Priyayi";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Turumbu";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Walantaka"
                    if (g2 !== randomG2 ) {
                        if (g2 === 0) {
                            var dateKKg2 = randomDateKK73;
                            randomG2 = faker.random.number({min:1, max:4});
                            var randomRtG2 = faker.random.number({min: 1, max: 20})
                            var randomRwG2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans73 = pad.substring(0, (pad.toString().length) - countG2.toString().length) + countG2.toString();
                        var Day73 = dateKKg2.getDate();
                        var Month73 = dateKKg2.getMonth();
                        var Year73 = dateKKg2.getFullYear();
                        Month73 = Month73 + 1
                        if (Day73.toString().length === 1) {
                            var Day73 = '0' + Day73;
                        }   
                        if (Month73.toString().length === 1) {
                            var Month73 = '0' + Month73;
                        }
                        var kkKotSerang2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day73 + Month73 + Year73.toString().substring(2, 4)+ans73;
                        var ansRtG2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtG2.toString().length) + randomRtG2.toString();
                        var ansRwG2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwG2.toString().length) + randomRwG2.toString();
                        RtRwResult = ansRtG2 + '/' + ansRwG2;
                        kkID = kkKotSerang2;
                    } else if (g2 === randomG2) {
                        g2 = -1;
                        randomG2 = 2;
                        countG2++;
                    }
                    g2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Walantaka";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Cigoong";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Nyapah";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Curug"
                    if (g3 !== randomG3 ) {
                        if (g3 === 0) {
                            var dateKKg3 = randomDateKK74;
                            randomG3 = faker.random.number({min:1, max:4});
                            var randomRtG3 = faker.random.number({min: 1, max: 20})
                            var randomRwG3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans74 = pad.substring(0, (pad.toString().length) - countG3.toString().length) + countG3.toString();
                        var Day74 = dateKKg3.getDate();
                        var Month74 = dateKKg3.getMonth();
                        var Year74 = dateKKg3.getFullYear();
                        Month74 = Month74 + 1
                        if (Day74.toString().length === 1) {
                            var Day74 = '0' + Day74;
                        }   
                        if (Month74.toString().length === 1) {
                            var Month74 = '0' + Month74;
                        }
                        var kkKotSerang3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day74 + Month74 + Year74.toString().substring(2, 4)+ans74;
                        var ansRtG3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtG3.toString().length) + randomRtG3.toString();
                        var ansRwG3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwG3.toString().length) + randomRwG3.toString();
                        RtRwResult = ansRtG3 + '/' + ansRwG3;
                        kkID = kkKotSerang3;
                    } else if (g3 === randomG3) {
                        g3 = -1;
                        randomG3 = 2;
                        countG3++;
                    }
                    g3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Curug";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Tinggar";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Kemanisan";
                    }
                }
            } else if (randomKotaId === "36.74") {
                kotaOrKab = "Kota Tangerang Selatan"
                randomKecamatanId = faker.random.arrayElement(["01", "02", "03", "04"]);
                if (randomKecamatanId === "01") {
                    kecamatan = "Sepong"
                    if (h !== randomH ) {
                        if (h === 0) {
                            var dateKKh = randomDateKK81;
                            randomH = faker.random.number({min:1, max:4});
                            var randomRtH = faker.random.number({min: 1, max: 20})
                            var randomRwH = faker.random.number({min: 1,max: 20})
                        }
                        var ans81 = pad.substring(0, (pad.toString().length) - countH.toString().length) + countH.toString();
                        var Day81 = dateKKh.getDate();
                        var Month81 = dateKKh.getMonth();
                        var Year81 = dateKKh.getFullYear();
                        Month81 = Month81 + 1
                        if (Day81.toString().length === 1) {
                            var Day81 = '0' + Day81;
                        }   
                        if (Month81.toString().length === 1) {
                            var Month81 = '0' + Month81;
                        }
                        var kkKottTangsel = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day81 + Month81 + Year81.toString().substring(2, 4)+ans81;
                        var ansRtH = padRtRw.substring(0, (padRtRw.toString().length) - randomRtH.toString().length) + randomRtH.toString();
                        var ansRwH = padRtRw.substring(0, (padRtRw.toString().length) - randomRwH.toString().length) + randomRwH.toString();
                        RtRwResult = ansRtH + '/' + ansRwH;
                        kkID = kkKottTangsel;
                    } else if (h === randomH) {
                        h = -1;
                        randomH = 2;
                        countH++;
                    }
                    h++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Ciater";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Rawabuntu";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Rawa Mekarjaya";
                    }
                } else if (randomKecamatanId === "02") {
                    kecamatan = "Serpong Utara"
                    if (h1 !== randomH1 ) {
                        if (h1 === 0) {
                            var dateKKh1 = randomDateKK82;
                            randomH1 = faker.random.number({min:1, max:4});
                            var randomRtH1 = faker.random.number({min: 1, max: 20})
                            var randomRwH1 = faker.random.number({min: 1,max: 20})
                        }
                        var ans82 = pad.substring(0, (pad.toString().length) - countH1.toString().length) + countH1.toString();
                        var Day82 = dateKKh1.getDate();
                        var Month82 = dateKKh1.getMonth();
                        var Year82 = dateKKh1.getFullYear();
                        Month82 = Month82 + 1
                        if (Day82.toString().length === 1) {
                            var Day82 = '0' + Day82;
                        }   
                        if (Month82.toString().length === 1) {
                            var Month82 = '0' + Month82;
                        }
                        var kkKottTangsel1 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day82 + Month82 + Year82.toString().substring(2, 4)+ans82;
                        var ansRtH1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtH1.toString().length) + randomRtH1.toString();
                        var ansRwH1 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwH1.toString().length) + randomRwH1.toString();
                        RtRwResult = ansRtH1 + '/' + ansRwH1;
                        kkID = kkKottTangsel1;
                    } else if (h1 === randomH1) {
                        h1 = -1;
                        randomH1 = 2;
                        countH1++;
                    }
                    h1++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Pakulonan";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Pakualam";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pakujaya";
                    }
                } else if (randomKecamatanId === "03") {
                    kecamatan = "Pondok Aren"
                    if (h2 !== randomH2 ) {
                        if (h2 === 0) {
                            var dateKKh2 = randomDateKK83;
                            randomH2 = faker.random.number({min:1, max:4});
                            var randomRtH2 = faker.random.number({min: 1, max: 20})
                            var randomRwH2 = faker.random.number({min: 1,max: 20})
                        }
                        var ans83 = pad.substring(0, (pad.toString().length) - countH2.toString().length) + countH2.toString();
                        var Day83 = dateKKh2.getDate();
                        var Month83 = dateKKh2.getMonth();
                        var Year83 = dateKKh2.getFullYear();
                        Month83 = Month83 + 1
                        if (Day83.toString().length === 1) {
                            var Day83 = '0' + Day83;
                        }   
                        if (Month83.toString().length === 1) {
                            var Month83 = '0' + Month83;
                        }
                        var kkKottTangsel2 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day83 + Month83 + Year83.toString().substring(2, 4)+ans83;
                        var ansRtH2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtH2.toString().length) + randomRtH2.toString();
                        var ansRwH2 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwH2.toString().length) + randomRwH2.toString();
                        RtRwResult = ansRtH2 + '/' + ansRwH2;
                        kkID = kkKottTangsel2;
                    } else if (h2 === randomH2) {
                        h2 = -1;
                        randomH2 = 2;
                        countH2++;
                    }
                    h2++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Pondok Betung";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Pondok Puncung";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Pondok Karya";
                    }
                } else if (randomKecamatanId === "04") {
                    kecamatan = "Ciputat"
                    if (h3 !== randomH3 ) {
                        if (h3 === 0) {
                            var dateKKh3 = randomDateKK84;
                            randomH3 = faker.random.number({min:1, max:4});
                            var randomRtH3 = faker.random.number({min: 1, max: 20})
                            var randomRwH3 = faker.random.number({min: 1,max: 20})
                        }
                        var ans84 = pad.substring(0, (pad.toString().length) - countH3.toString().length) + countH3.toString();
                        var Day84 = dateKKh3.getDate();
                        var Month84 = dateKKh3.getMonth();
                        var Year84 = dateKKh3.getFullYear();
                        Month84 = Month84 + 1
                        if (Day84.toString().length === 1) {
                            var Day84 = '0' + Day84;
                        }   
                        if (Month84.toString().length === 1) {
                            var Month84 = '0' + Month84;
                        }
                        var kkKottTangsel3 = kotasplit[0] + kotasplit[1] + randomKecamatanId + Day84 + Month84 + Year84.toString().substring(2, 4)+ans84;
                        var ansRtH3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRtH3.toString().length) + randomRtH3.toString();
                        var ansRwH3 = padRtRw.substring(0, (padRtRw.toString().length) - randomRwH3.toString().length) + randomRwH3.toString();
                        RtRwResult = ansRtH3 + '/' + ansRwH3;
                        kkID = kkKottTangsel3;
                    } else if (h3 === randomH3) {
                        h3 = -1;
                        randomH3 = 2;
                        countH3++;
                    }
                    h3++;
                    randomKelDesId = faker.random.arrayElement(["2001", "2002", "2003"]);
                    if (randomKelDesId === "2001") {
                        kelDes = "Sawah Baru";
                    } else if (randomKelDesId === "2002") {
                        kelDes = "Serua";
                    } else if (randomKelDesId === "2003") {
                        kelDes = "Ciputat";
                    }
                }
            }
            console.log('rtrw hasil ', RtRwResult);
            console.log('kk id' ,kkID);
            const KtpSchema = await new Ktp({
                nik: kotasplit[0] + kotasplit[1] + randomKecamatanId + Day + Month + Year.toString().substring(2, 4) + ans,
                nama: faker.name.findName(),
                kkId: kkID,
                alamat: faker.address.streetAddress(),
                golonganDarah: faker.random.arrayElement(["A", "AB", "B", "O"]),
                rtrw: RtRwResult,
                keldes: kelDes,
                kecamatan: kecamatan,
                kabkot: kotaOrKab,
                jenisKelamin: faker.random.arrayElement(["Laki-Laki", "Perempuan"]),
                tempatTTL: faker.address.city() + " ,  " + Day + '-' + Month + '-' + Year,
                pekerjaan: faker.name.jobTitle(),
                status: faker.random.arrayElement(["KAWIN", "BELUM KAWIN"]),
                kewarganegaraan: 'WNI',
                foto: faker.image.avatar()
            }).save();
        }
        res.sendStatus(200);
    },
    async addRandomCaleg(req,res,next){
        const ktpresults = await Ktp.find({}).populate({
            path: '_id'
        });
        const parpolresults = await Parpol.find({}).populate({
            path: '_id'
        });
        res.json(parpolresults[0].name);
        var KtpL =  new Array();
        var idKtp = new Array();
        var KtpP = new Array();
        var ParpolId = new Array();
        var a = 0;
        var change = 0;
        for (var i = 0; i < ktpresults.length; i++) {
            idKtp.push(ktpresults[i]._id);
            if (ktpresults[i].jenisKelamin ==='Perempuan') {
                KtpP.push(ktpresults[i]._id);
            }
            else{
                KtpL.push(ktpresults[i]._id);    
            }
        }
        console.log("jumlah ktp L", KtpL.length)
        console.log("jumlah ktp P", KtpP.length)
       
        for (var i = 0; i < parpolresults.length; i++) {
            ParpolId.push(parpolresults[i]._id._id)//some game data
        }
        
        //Caleg DPR
        for (let index = 0; index < ParpolId.length ; index++) {
            for (let category = 1; category <= 3; category++) {
                for (let sum = 0; sum <= 1; sum++) {
                    const CalegSchema = await new Caleg({
                        idParpol: ParpolId[index],
                        ktp :KtpP[a]._id,
                        name:KtpP[a].nama, 
                        img:KtpP[a].foto,
                        vote: 0,
                        category: "Banten"+category,
                    }).save(); 
                    a++
                }
            } 
        }
        for (let index = 0; index < ParpolId.length ; index++) {
            for (let category = 1; category <= 3; category++) {
                for (let sum = 0; sum <= 3; sum++) {
                    const CalegSchema = await new Caleg({
                        idParpol: ParpolId[index],
                        ktp :KtpL[a]._id,
                        name:KtpL[a].nama, 
                        img:KtpL[a].foto,
                        vote: 0,
                        category: "Banten"+category,
                    }).save(); 
                    a++
                }
            }
        }
    }
}