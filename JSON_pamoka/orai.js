async function loadMeteo(place) {
    const tmp = await fetch("https://api.meteo.lt/v1/places/" + place + "/forecasts/long-term");
    const meteo = await tmp.json();

    meteo.forecastTimestamps.forEach((oras) => {
        console.log(`${oras.forecastTimeUtc} ${oras.airTemperature} \t ${oras.conditionCode}`);
    });

}

loadMeteo(process.argv[2]);