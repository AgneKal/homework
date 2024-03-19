// Užduotis 2(IF - 1):
// Pirmosios vasaros olimpinės žaidynės įvyko 1896 m.Atėnuose.Po to jos vyko arba turėjo vykti kas ketveri metai, t.y. 1900 m. – antrosios, 1904 m. – trečiosios ir t.t.Neįvykusioms žaidynėms skiriamas eilės numeris, o jų metai vis tiek laikomi olimpiniais.Žinomi metai M.Nustatykite olimpinių žaidimų numerį, jei metai yra olimpiniai arba pasakykite, kad metai ne olimpiniai.Programa turi paprašyti įvesti metus, ir išvesti ar tai buvo olimpiniai metai ar ne, jei tai buvo olimpiniai metai programa turi taip pat išvesti ir numerį.

const metai = Number(process.argv[2]);

function isOlimpyc(m) {
    const yearsCounter = Math.floor((metai - 1896) / 4) + 1;

    if (metai >= 1896 && metai < 2024 && metai % 4 === 0) {
        if (yearsCounter === 6 || yearsCounter === 12 || yearsCounter === 13) {
            return `Tai ${yearsCounter} olimpynės žaidynės, kurios deja buvo atšauktos.`;
        } else {
            return `Tai ${yearsCounter} olimpynės žaidynės.`;
        }
    } else if (metai >= 1896 && metai <= 2024 && metai % 4 > 0) {
        return `Jūsų nurodyti metai buvo ne olimpiniai.`;
    } else if (metai < 1896) {
        return `Pirmosios olimpinės žaidynės įvyko tik 1896 metais. Taigi Jūsų nurodytais metais olimpynės žaidynės dar neegzistavo.`;
    } else if (metai >= 2024 && metai % 4 === 0) {
        if (yearsCounter === 33) {
            return `Tai ${yearsCounter} olimpynės žaidynės, kurios vyks Paryžiuje.`;
        } else if (yearsCounter === 34) {
            return `Tai ${yearsCounter} olimpynės žaidynės, kurios vyks Los Andžele.`;
        } else {
            return `Tai dar nenumatytos olimpynės žaidynės. Tačiau turėtų būti ${yearsCounter} olimpynės žaidynės.`;
        }
    } else {
        return `Jūsų nurodyti metai nėra olimpiniai.`;
    }
}

console.log(isOlimpyc(metai));

