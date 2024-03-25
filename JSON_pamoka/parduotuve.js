const fs = require('fs');
let str = fs.readFileSync('data_parduotuve.json').toString();

const sandelys = JSON.parse(str);

console.log(sandelys);

sandelys.forEach((preke) => {
    console.log(`${preke.pavadinimas}, kaina ${preke.kaina} EUR, kiekis: ${preke.kiekis_sandelyje.reduce((a, b) => a + b, 0,)}.`)
})
