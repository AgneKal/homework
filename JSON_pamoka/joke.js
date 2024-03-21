async function loadJoke() {
    console.log('Parsiuntimas pradėtas');
    const tmp = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const joke = await tmp.json();
    console.log(`Kategorija ${joke.category}`);
    console.log(joke.joke);
    console.log('Parsiuntimas baigtas');
}

//veikimas async ir await
console.log('Pirma instrukcija');
loadJoke();
console.log('Programa baigta');