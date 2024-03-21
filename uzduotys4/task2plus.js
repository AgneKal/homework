const currency = process.argv[2];
const sum = process.argv[3];

async function changeCurrency(currency, sum) {
    const rates = await fetch(`https://api.frankfurter.app/latest?amount=${sum}&from=EUR&to=${currency}`);
    const changer = await rates.json();

    const curr = await fetch(`https://api.frankfurter.app/currencies`);
    const currencies = await curr.json();
    const allCurr = Object.keys(currencies).join(', ');

    if (changer.rates[currency]) {
        return console.log(`${currency} kursas: ${changer.rates[currency] / sum}\n${sum} EUR => ${changer.rates[currency]} ${currency}`);
    } else {
        return console.log(`Valiuta ${currency} neegzistuoja.\n\nGalite rinktis vieną iš šių valiutų: ${allCurr}.`);
    }
}

changeCurrency(currency, sum);
