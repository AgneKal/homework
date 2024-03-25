

//*******************  Konstruktorius **************************/

// Klasės (brėžinio) aprašymas
class Preke {
    kaina = 0;
    kainaSuPVM = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //Pradiniu reiksmiu priskyrimas
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;

        //Skaiciavimai ir programinis kodas kuris vykdomas kiekvieno objekto sukurimo metu
        this.kainaSuPVM = this.kaina * 1.21;
    }
}


//console.log("2");
//Naujų objektų sukūrimas
const tv = new Preke(100, "Televizorius");
const pc = new Preke(600, "Kompiuteris");

console.log(tv);
console.log(pc);


