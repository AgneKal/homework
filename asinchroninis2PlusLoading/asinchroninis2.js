
//Zanro pasirinkimo laukas
const zanrasSelect = document.getElementById("zanras");
const rodytiButton = document.getElementById("rodyti");
const rezultatai = document.getElementById("rezultatai");
const loading = document.getElementById("loading");

//Parametrai funkcijai fetch (prisijungimo duomenys)
const req = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDNhMTcxMGNkMDc4NTU2NWM1MmM4YjQxYjU2YWYwYiIsInN1YiI6IjY2MGUxOTFiZGE5ZWYyMDE3ZDU4YmRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wCP5A-AExFKtZPZAzK4yr5Nh4f8h0jHhZmaksgY4C2w'
    }
}

//Užkrauname visus žanrus
fetch('https://api.themoviedb.org/3/genre/movie/list?language=lt', req)
    .then((response) => {
        //Gautą informaciją konvertuojame į JSON
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.genres.forEach((g) => {
            const o = document.createElement("option");
            o.textContent = g.name;
            o.value = g.id;
            zanrasSelect.appendChild(o);
        })

    });


//Filmų pagal žanrą užkrovimas
const rodytiFilmusPagaZanra = () => {
    const genreId = zanrasSelect.value;
    loading.style.display = "block";
    fetch(`https://api.themoviedb.org/3/discover/movie?language=lt&with_genres=${genreId}`, req)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            rezultatai.innerHTML = '';
            data.results.forEach((m) => {
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.textContent = m.title;

                rezultatai.appendChild(li);

            })
            loading.style.display = "none";

        });

};

rodytiButton.onclick = rodytiFilmusPagaZanra;
