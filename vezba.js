var a = 7;
var b = 3;
var c;
    console.log(a,b);

c = a;
a = b;
b = c;
    console.log(a,b);

var korisnikoveGodine = prompt("Koliko godina imas?");

    if (korisnikoveGodine <= 7){
    	console.log("Pristup je zabranjen.");
    }
    else if ( korisnikoveGodine <= 16 ) {
    	console.log("Imas limitiran pristup.");
    }
    // else if(korisnikoveGodine >= 8 && korisnikoveGodine <=16 ){
    //     console.log("Imas limitiran pristup.");
    // }
    else {
        console.log("Imas potpun pristup.");
    }

var izborBoje = prompt("Izaberi dve, od tri ponudjene boje (crvena, zuta ili plava)?")
    if (izborBoje === "crvena i zuta"){
    	console.log("Narandzasta")
    }
    if (izborBoje === "crvena i plava") {
    	console.log("Ljubicasta")
    }
    if (izborBoje === "zuta i plava") {
    	console.log("Zelena")
    }
    else {
    	console.log("Uneli ste pogresne boje.")
    }

var omiljeniHTMLtag = prompt ("Unesite Vas omiljeni HTML tag.");
var ime = prompt ("Unesite Vase ime");
console.log ("<" + omiljeniHTMLtag + ">" + ime + "</" + omiljeniHTMLtag + ">");

var unetiBroj = prompt ("Unesite jedan broj.");
if (unetiBroj%2 ===0){
	console.log("Broje je paran.");
}
else {
	console.log("Broj je neparan.")
}
if ( unetiBroj>25){
	console.log("Uneti broj je veci od 25.")
}
else {
	console.log("Uneti broj je manji od 25.")
}

var fizzBuzz = prompt ("Unesite broj.");
if (fizzBuzz%3 ===0) {
	console.log("Fizz")
}
else if (fizzBuzz%5 ===0) {
	console.log("Buzz")
}
else if (fizzBuzz%5 ===0 && fizzBuzz%3 ===0) {
	console.log("FizzBuzz")
}
else {
	console.log("Broj nije deljiv ni sa 3, ni sa 5.")
}

var mesec = prompt("Unesite mesec rodjenja.")
if (mesec==="Januar" || mesec==="1") {
	console.log("Sledeci mesec je Februar.")
}
else if (mesec==="Februar" || mesec==="2") {
	console.log("Sledeci mesec je Mart.")
}
else if (mesec==="Mart" || mesec==="3") {
	console.log("Sledeci mesec je April.")
}
else if (mesec==="April" || mesec==="4") {
	console.log("Sledeci mesec je Maj.")
}
else if (mesec==="Maj" || mesec==="5") {
	console.log("Sledeci mesec je Jun.")
}
else if (mesec==="Jun" || mesec==="6") {
	console.log("Sledeci mesec je Jul.")
}
else if (mesec==="Jul" || mesec==="7") {
	console.log("Sledeci mesec je Avgust.")
}
else if (mesec==="Avgust" || mesec==="8") {
	console.log("Sledeci mesec je Septembar.")
}
else if (mesec==="Septembar" || mesec==="9") {
	console.log("Sledeci mesec je Oktobar.")
}
else if (mesec==="Oktobar" || mesec==="10") {
	console.log("Sledeci mesec je Novembar.")
}
else if (mesec==="Novembar" || mesec==="11") {
	console.log("Sledeci mesec je Decembar.")
}
else if (mesec==="Decembar" || mesec==="12") {
	console.log("Sledeci mesec je Januar.")
}