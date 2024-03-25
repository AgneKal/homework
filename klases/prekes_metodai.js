// ********** Konstruktorius **********

// Klasės (brėžinio) aprašymas
class Preke {
    kaina = 0;
    pavadinimas = '';
    constructor(kaina, pavadinimas) {
        // pradinių reikšmių sukūrimas
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;
    }

    // Metodas (kitaip f-ja kuri yra klasėje)
    isvesti() {
        return `Prekės pavadinimas: ${this.pavadinimas}, kaina: ${this.kaina} EUR.`
    }

    //Getter
    get kainaSuPVM() {
        return this.kaina * 1.21;
    }
}

// Naujų objektų sukūrimas
const tv = new Preke(100, 'Televizorius');
const pc = new Preke(600, 'Kompiuteris');

console.log(tv.isvesti());
console.log(pc.isvesti());

console.log(tv.kainaSuPVM);
console.log(pc.kainaSuPVM);
