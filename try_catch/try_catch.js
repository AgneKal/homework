try {
    // 1. Pirma komanda
    // 2. Komanda (fatal error)
    // 3. Trecia komanda
} catch (error) {
    //  Komandos ka daryti su klaida
}

// 4. Informacija vartotojui
/*

throw {"page not found"};


async function convertCurrency(currency, amount) {
    try {
        const response = await axios.get(`https://api.frankfurter.app/latest?from=EUR&to=${currency}`);
        const rate = response.data.rates[currency];
        const convertedAmount = (rate * amount).toFixed(2);
        console.log(`${currency} kursas: ${rate}`);
        console.log(`${amount} EUR => ${convertedAmount} ${currency}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        console.log('Galite Rinktis vieną iš šių valiutų: AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, NOK, GBP, HKD');
    }
    
}
*/

/*
Failo nuskaitymas su patikrinimu ar failas egzistuoja

const fs=require("fs");
try{
    const input=fs.readFileSync(process.argv[2]).toString().split("\r\n");

    let mas2d=[];
    input.forEach((l)=>{
        mas2d.push(l.split(" ").map(Number));   
    });
    
    let n=mas2d.length;
    
    for (i=0; i<n; i++){ 
        mas2d[i][i]=0;
        mas2d[n-1-i][i]=0;
    }
    
    console.log(mas2d);
}catch(error){
   console.log("Įvyko klaida, tikriausiai failas nerastas");
}
*/