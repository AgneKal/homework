
// Užduotis 3(IF - 2):
// Elektroninis laikrodis rodo laiką: valandas, minutes ir sekundes(įvedami skaičiai h, m, s).Kiek laiko laikrodis rodys po sekundės ? (Išveskite h, m, ir s). Visi skaičiai įvedami kkaip parametrai(h, m, s).

const h = Number(process.argv[2]);
const m = Number(process.argv[3]);
const s = Number(process.argv[4]);

function plusSecond(h, m, s) {
    if (h > 23 || m > 59 || s > 59) {
        return `Netinkamai nurodytas laikas.`;
    }
    if (s < 59) {
        s++;
    }
    if (s === 59 && m < 59) {
        s = 0;
        m++;
    } else if (s === 59 && m === 59 && h < 23) {
        s = 0;
        m = 0;
        h++
    } else if (s === 59 && m === 59 && h === 23) {
        s = 0;
        m = 0;
        h = 0;
    }
    return `${h} ${m} ${s}`;
}

console.log(plusSecond(h, m, s));
