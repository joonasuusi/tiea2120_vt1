"use strict";
//@ts-check 
// Joukkueen sarja on viite data.sarjat-taulukossa lueteltuihin sarjoihin
// Joukkueen leimaamat rastit ovat viitteitä data.rastit-taulukossa lueteltuihin rasteihin
// voit vapaasti luoda data-rakenteen pohjalta omia aputietorakenteita

// Kirjoita tästä eteenpäin oma ohjelmakoodisi

// Seuraavilla voit tutkia selaimen konsolissa käytössäsi olevaa tietorakennetta. 

console.log(data);

//console.dir(data);

/**
 * TASO 1
 * Tulostaa joukkueen nimen ja sarjan
 * @param {*} d käytettävä data
 */
function tulostaJoukkueet(d) {
    let joukkue = d.joukkueet;
    for (let i = 0; i < joukkue.length; i++) {
        log( joukkue[i].nimi.trim() + " " + joukkue[i].sarja.nimi );
    }
}

/**
 * Vertailufunktio joukkueille
 * @param {*} a 
 * @param {*} b 
 */
function vertaa(a,b) {
    const joukkue1 = a.nimi.toUpperCase().trim();
    const joukkue2 = b.nimi.toUpperCase().trim();
  
    if (joukkue1 < joukkue2) {
        return -1;
    } else if (joukkue1 > joukkue2) {
        return 1;
    }
}

/**
 * Vertailufunktio rasteille
 * @param {*} a 
 * @param {*} b 
 */
function vertaaRastit(a,b) {
    const rasti1 = a.koodi.toUpperCase().trim();
    const rasti2 = b.koodi.toUpperCase().trim();
  
    if (rasti1 < rasti2) {
        return -1;
    } else if (rasti1 > rasti2) {
        return 1;
    }
}

/**
 * TASO 1
 * Lisää joukkueen tietorakenteeseen
 * @param {*} data käytettävä data
 * @param {*} joukkue joukkue objekti
 * @param {*} sarja joukkueen sarja
 */
function lisaaJoukkue(data, joukkue, sarja) {
    if (sarja === "" || joukkue == null) {
        return;
    }
    let is = data.sarjat;
    for (let i=0; i <is.length; i++) {
        if (sarja === is[i].nimi) {
            let d = is[i].id;
            joukkue.sarja = is[i];
            let paikka = data.joukkueet.length;
            data["joukkueet"][paikka] = joukkue;
        }
    }
}

/**
 * TASO 1
 * Muutetaan sarjan nimeä
 * @param {*} data data jota käsitellään
 * @param {*} vanhanimi sarjan vanhanimi
 * @param {*} uusinimi sarjan uusinimi
 */
function muutaSarjanNimi(data, vanhanimi, uusinimi) {
    let sarja = data.sarjat;
    let jsarja = data.joukkueet;
    for (let i = 0; i < sarja.length; i++) {
        if (vanhanimi === sarja[i].nimi) {
            sarja[i].nimi = uusinimi;
        }
    }
}

/**
 * TASO 1
 * Tulostetaan rastit joiden ensimmäinen merkki on numero
 * @param {*} rasti data josta rastit etsitään
 */
function tulostaRastit(rasti) {
    let s = "";
    for(let i in rasti) {
        let ekanum = rasti[i].koodi.charAt(0);
        if (ekanum <='9' && ekanum >='0') {
            s += rasti[i].koodi + ";";
        }
    }
    log(s);
}

/**
 * TASO 3
 * Poistaa halutun joukkueen nimen perusteella
 * @param {*} data Käytettävä data
 * @param {*} joukkue poistettava joukkue
 */
function poistaJoukkue(data, joukkue) {
    let jn = data.joukkueet;
    for (let i = 0; i < jn.length; i++) {
        if (joukkue === jn[i].nimi) {
            jn.splice(i,1);
        }
        
    }
}

/**
 * Vertaillaan pisteiden avulla joukkueet järjestykseen, jos tasapisteet
 * niin katsotaan aakkosjärjestystä
 * @param {*} a tutkittava osa taulukkoa
 * @param {*} b tutkittava osa taulukkoa
 */
function compare(a,b) {
    const pisteet1 = parseInt(a[1]);
    const pisteet2 = parseInt(b[1]);

    if (pisteet1 > pisteet2) {
        return -1;
    } if (pisteet1 < pisteet2) {
        return 1;
    }
    else if (pisteet1 == pisteet2) {
        const joukkue1 = a[0];
        const joukkue2 = b[0];
        if (joukkue1 < joukkue2) {
            return -1;
        } if (joukkue1 > joukkue2) {
            return 1;
        }
    }
}


// "Pääohjelma"
let joukkue = { 
    "nimi": "Mallijoukkue",
    "jasenet": [
      "Lammi Tohtonen",
      "Matti Meikäläinen"
    ],
    "leimaustapa": [0,2],
    "rastit": [

    ],
    "sarja": {

    },
    "id": 99999};

lisaaJoukkue(data, joukkue, "8h");

data.joukkueet.sort(vertaa);
data.rastit.sort(vertaaRastit);
muutaSarjanNimi(data, "8h", "10h");
tulostaJoukkueet(data);

log();

tulostaRastit(data.rastit);

log("\n---------- \nTaso 3\n----------\n");

poistaJoukkue(data, "Vara 1");
poistaJoukkue(data, "Vara 2");
poistaJoukkue(data, "Vapaat");


let loydetty_joukkue = etsi_joukkue("Dynamic Duo");
if (loydetty_joukkue != null) {
    let uusirasti = etsi_rasti("32");
    if (uusirasti != null) {
        vaihdaRasti(loydetty_joukkue, 73, uusirasti);
    }
}

let rastitJaJoukkue = {
    "joukkueet": [], 
    "pisteet": []
};

let rastitJaJoukkueJaMatka = {
    "joukkueet": [],
    "pisteet": [],
    "matka": [],
    "aika": []
};

pisteet();
tulosta_pisteet_ja_joukkueet(rastitJaJoukkue);


log("\n---------- \nTaso 5\n----------\n");

for (let i = 0; i < data.joukkueet.length; i++) {
    joukkueenmatka(data.joukkueet[i]);
    joukkueenAika(data.joukkueet[i]);   
}

tulosta_matkat(rastitJaJoukkueJaMatka);


// "Pääohjelma" loppuu

/**
 * Tulostaa 3. tason listauksen
 * @param {*} rastitJaJoukkue rakenne josta asiat tulostetaan
 */
function tulosta_pisteet_ja_joukkueet(rastitJaJoukkue) {
    let yhdistys = yhdista(rastitJaJoukkue);
    yhdistys.sort(compare);
    for (let i = 0; i < yhdistys.length; i++) {
        let element = yhdistys[i];
        let s = element.toString().trim();
        let p = s.split(",", 1);
        let k = s.split(/[abcdefghijklmnopqrstuvwxyzöäå,]/).pop();
        log(p + " (" + k + " p)");
    }
}

/**
 * Yhdistää objektin taulukoksi, joka helpottaa itseä
 * @param {*} rastitJaJoukkue 
 * @returns 
 */
function yhdista(rastitJaJoukkue) {
    let taulu = [];
    for (let i = 0; i < rastitJaJoukkue.joukkueet.length; i++) {
        taulu.push([rastitJaJoukkue.joukkueet[i], rastitJaJoukkue.pisteet[i]]);
    }
    return taulu;
}

/**
 * Tulostaa 5. tason listauksen
 * @param {*} rastitJaJoukkueJaMatka 
 */
function tulosta_matkat(rastitJaJoukkueJaMatka) {
    let yhdistys = yhdista_kaikki(rastitJaJoukkueJaMatka);
    yhdistys.sort(compare);
    for (let i = 0; i < yhdistys.length; i++) {
        let element = yhdistys[i];
        let s = element.toString().trim();
        let p = s.split(",", 4);
        log(p[0].trim() + ", " + p[1] + " p" + ", " +  p[2] + " km, " + p[3]);
    }
}

/**
 * Yhdistää objektin taulukoksi, joka helpottaa itseä
 * @param {*} rastitJaJoukkueJaMatka 
 * @returns 
 */
function yhdista_kaikki(rastitJaJoukkueJaMatka) {
    let taulu = [];
    for (let i = 0; i < rastitJaJoukkueJaMatka.joukkueet.length; i++) {
        taulu.push([rastitJaJoukkueJaMatka.joukkueet[i], rastitJaJoukkueJaMatka.pisteet[i], rastitJaJoukkueJaMatka.matka[i], rastitJaJoukkueJaMatka.aika[i]]);
    }
    return taulu;
}


/**
 * TASO 3
 * Etsii joukkueen jonka rasti tullaan vaihtamaan
 * @param {*} joukkue joukkueen nimi
 * @returns palauttaa etsittävän joukkueen datarakenteen, jos ei löydy, palautetaan null
 */
function etsi_joukkue(joukkue) {
    for (let i = 0; i < data.joukkueet.length; i++) {
        if (data.joukkueet[i].nimi.trim().toUpperCase() === joukkue.trim().toUpperCase()) {
            return data.joukkueet[i];
        }   
    }
    return null;
}

/**
 * TASO 3
 * Etsii vaihdettavan rasti
 * @param {*} joukkuenimi joukkue data
 * @param {*} rastikoodi etsittävä koodi
 * @returns Etsii haettavan joukkueen tietyn rastin rastidata rakenteen, jos ei löydy, palautetaan null
 */
function etsi_rasti(rastikoodi) {
    for (let i = 0; i < data.rastit.length; i++) {
        if (data.rastit[i].koodi === rastikoodi) {
            return data.rastit[i];
        }
    }
    return null;
}

/**
 * TASO 3
 * Vaihtaa pyydetyn rastileimauksen sijalle uuden rastin.
 * Funktiossa luotu uusi rastiobjekti johon laitettu "vanhan" rastin tiedot ja päivitetty uusi koodi, koska muuten vaihtaisi kaikkien tämän rastin koodit
 * @param {Object} joukkue
 * @param {number} rastinIdx - rastin paikka joukkue.rastit-taulukossa
 * @param {Object} uusirasti
 * @param {string} [Aika] - Rastileimauksen aika. Jos tätä ei anneta, käytetään samaa aikaa kuin vanhassa korvattavassa leimauksessa
 */
function vaihdaRasti(joukkue, rastinIdx, uusirasti, aika) {
    if (aika != null) {
        uusirasti.aika = aika;
    }
    else {
        uusirasti.aika = joukkue.rastit[rastinIdx].aika;
    }
    joukkue.rastit[rastinIdx].rasti = uusirasti;
}


/**
 * TASO 3
 * Lasketaan joukkueille pisteet
 */
function pisteet() {
    let d = data.joukkueet;
    let tulos = 0;
    for (let i = 0; i < d.length; i++) {
        let setti = new Set();
        for (let j = 0; j < d[i].rastit.length; j++) {
            if (d[i].rastit[j].rasti == undefined) {
                continue;
            }
            let pojot = d[i].rastit[j].rasti.koodi;
            if (pojot == undefined) {
                continue;
            }
            if (pojot != "LAHTO" || pojot !== "MAALI" || pojot !== "F" ) {
                setti.add(pojot);
            } 
        }
                 
        for (let k of setti) {
            if (k[0] <= "9" && k[0] >= "0") {
                let t = parseInt(k[0]);
                tulos += t;
            }
        }
        rastitJaJoukkue.joukkueet.push([d[i].nimi]);
        rastitJaJoukkue.pisteet.push([tulos]);
        rastitJaJoukkueJaMatka.joukkueet.push([d[i].nimi]);
        rastitJaJoukkueJaMatka.pisteet.push([tulos]);
        tulos = 0;
    }
}

/**
 * Lahtoselta lainattu funktio
 * @param {*} lat1 
 * @param {*} lon1 
 * @param {*} lat2 
 * @param {*} lon2 
 * @returns 
 */
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180);
  }

/**
 * TASO 5
 * Laskee joukkueen matkan
 * @param {*} data 
 * @param {*} joukkue 
 * @returns 
 */
function joukkueenmatka(joukkue) {
    let matka = 0;
    let rastit = haeRastit(joukkue);
   
    if (rastit.length < 1) {
        rastitJaJoukkueJaMatka.matka.push(matka);
    }
    for (let l = 0; l < rastit.length; l++) {
        if (rastit[l].lat == undefined || rastit[l].lon == undefined) {
            continue;
        }

        let l1 = l+1;
        if (l1 >= rastit.length) {
            matka = Math.round(matka);
            
            rastitJaJoukkueJaMatka.matka.push(matka);
            return;
        }
        
        matka += getDistanceFromLatLonInKm(parseFloat(rastit[l].lat), parseFloat(rastit[l].lon), parseFloat(rastit[l1].lat), parseFloat(rastit[l1].lon));
    } 
    
}

/**
 * TASO 5
 * Laskee joukkueen käyttämän ajan. Aika sekasotkua loppupeleissä tuli..
 * @param {*} joukkue 
 * @returns 
 */
function joukkueenAika(joukkue) {
    let ajat = haeAjat(joukkue);
    // Jos ajat taulukon koko alta 2, niin laitetaan suoraan ajaksi 00:00:00, koska järkeviä maali/lahto leimauksia ei voi olla
    if (ajat.length < 2) {
        rastitJaJoukkueJaMatka.aika.push("00:00:00");
        return;
    }
    let lahto = -1;
    let maali = -1;
    // Jos ajat taulukon koko yli 2, tiedetään että siellä on ylimääräisiä LAHTO tai MAALI merkkauksia
    if (ajat.length > 2) {
        for (let i = 0; i < ajat.length-1; i++) {
            let lahto1 = ajat[i].rasti.koodi.indexOf("LAHTO",0); 
            if (lahto1 == 0) {
                lahto = i;
            }
        }

        //console.log(ajat);
        for (let i = 0; i < ajat.length; i++) {
            maali = ajat[i].rasti.koodi.lastIndexOf("MAALI", 0);
            if (maali == 0 && i > 0) {
                maali = i;
                break;
            }
        }

        let a = new Date(ajat[lahto].aika);
        let a1 = new Date(ajat[maali].aika);
        let ts = (a1.getTime() - a.getTime()) / 1000;             
        let time = Math.floor(ts / 3600);                           
        ts -= time * 3600;                                          
        let tm = Math.floor(ts / 60);                             
        ts -= tm * 60;                                            
        let time_end =  time.toString().padStart(2, '0') + ":" + tm.toString().padStart(2, '0') + ":" + ts.toString().padStart(2, '0');
        //console.log(time_end+ " " + joukkue.nimi);
        rastitJaJoukkueJaMatka.aika.push(time_end);
        return;
    }
    
    // Tehdään asiat normaalisti jos on pelkästään lahto ja maali leimat
    let a = new Date(ajat[0].aika);
    let a1 = new Date(ajat[ajat.length - 1].aika);
    let ts = (a1.getTime() - a.getTime()) / 1000;             
    let time = Math.floor(ts / 3600);                           
    ts -= time * 3600;                                          
    let tm = Math.floor(ts / 60);                             
    ts -= tm * 60;                                            
    let time_end =  time.toString().padStart(2, '0') + ":" + tm.toString().padStart(2, '0') + ":" + ts.toString().padStart(2, '0');
    //console.log(time_end+ " " + joukkue.nimi);
    rastitJaJoukkueJaMatka.aika.push(time_end);
}

/**
 * TASO 5
 * Hakee rastit joiden koodina LAHTO tai MAALI.
 * @param {*} joukkue joukkue
 * @returns 
 */
function haeAjat(joukkue) {
    let taulu = [];
    if (joukkue.rastit.length < 2) {
        return taulu;
    }
    for (let i = 0; i < joukkue.rastit.length; i++) {
        if (joukkue.rastit[i].rasti == undefined) {
            continue;
        }
        // Jos koodina LAHTO tai MAALI, lisätään rasti, jotta taulukko olisi mahdollisimman pieni
        if (joukkue.rastit[i].rasti.koodi === "LAHTO" || joukkue.rastit[i].rasti.koodi === "MAALI") {
            taulu.push(joukkue.rastit[i]);
        }
    }
    return taulu;
}

/**
 * TASO 5
 * Hakee rastit matkan laskua varten
 * @param {*} data 
 * @param {*} joukkue 
 * @returns 
 */
function haeRastit(joukkue) {
    let taulu = [];
    for (let i = 0; i < joukkue.rastit.length; i++) {
        if (joukkue.rastit[i].rasti == undefined) {
            continue;
        }
        
        if (joukkue.rastit[i].rasti.koodi != undefined) {
            taulu.push(joukkue.rastit[i].rasti);
        }
    }
    return taulu;
}

