let n1
let n2
let n3
let n4
let n5
let summe = 0;
let anzahlNoten = 0;
let ergebnis;

//refactor auf -> notenAuslesen()
function tfAuslesen(){

    anzahlNoten = 0
    summe = 0
    
    n1 = parseInt(document.getElementById("tfNote1").value);
    n2 = parseInt(document.getElementById("tfNote2").value);
    n3 = parseInt(document.getElementById("tfNote3").value);
    n4 = parseInt(document.getElementById("tfNote4").value);
    n5 = parseInt(document.getElementById("tfNote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 +  ";" + n4 +  ";" + n5);

    eingabeUeberpruefen(n1);
    eingabeUeberpruefen(n2);
    eingabeUeberpruefen(n3);
    eingabeUeberpruefen(n4);
    eingabeUeberpruefen(n5);

    ergebnis = summe/anzahlNoten;

    document.getElementById("ausgabe"). innerHTML = ergebnis;
    document.getElementById("ausgabe").style.color = "crimson"

    if (ergebnis < 5) {document.getElementById("ausgabe").style.color = "crimson"}
    else{
        if (ergebnis<10){document.getElementById("ausgabe").style.color = "orange"}
        else{document.getElementById("ausgabe").style.color = "green"
        }
    }

}





//refactor auf -> eingabeUeberpruefen(punkte)
function eingabeUeberpruefen(punkte) {
    if (isNaN(punkte)){
        console.log("Keine Zahl");
    } else {
        anzahlNoten = anzahlNoten + 1;
        summe = summe + punkte;
    }
}
