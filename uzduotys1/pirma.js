// Užduotis 1(Veiksmai):
// Sukurkite programą trikampio plotui rasti.Trikampio kraštinės įvedamos klaviatūra, o programa turi išvesti rezultatą.
// Duomenys įvedami kaip parametrai: a, b ir c.

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);

function triangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const heronFormula = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return heronFormula;
}

console.log(triangleArea(a, b, c).toFixed(2))