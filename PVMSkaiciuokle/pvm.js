//Kintamajam prisiskiriam HTML objekta
//const skaiciuotiBtn=document.getElementById("skaiciuoti");

//Paimti vieną elementą HTML objektą, mygtuką 
const skaiciuotiBtn = document.querySelector("#skaiciuoti");

//Prisiskiriame ivedimo lauka
const kainaInp = document.querySelector("#kaina");

//Prisiskiriame isvedimo div
const rezultatasDiv = document.querySelector("#rez");

const pvmSelect = document.querySelector("#pvm");

const error = document.querySelector("#error");

//Paimti visus elemtus, grazinamas masyvas
//const skaiciuotiBtn=document.querySelectorAll(".btn-success");

/*
skaiciuotiBtn.forEach((b)=>{
    console.log( b.innerHTML);
})
*/

// Išjungiame mygtuką
skaiciuotiBtn.disabled = true;
error.style.visibility = "hidden";


skaiciuoti = () => {
    rezultatasDiv.innerHTML = kainaInp.value * (1 + (pvmSelect.value / 100));
    kainaInp.value = '';
    skaiciuotiBtn.disabled = true;
}

//Įjungiame mygtuką
ijungtiMygtuka = () => {
    console.log(kainaInp.value);
    if (kainaInp.value == '' || isNaN(kainaInp.value)) {
        skaiciuotiBtn.disabled = true;
        error.innerHTML = "Įveskite skaičių"
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";
    } else {
        skaiciuotiBtn.disabled = false;
        //error.innerHTML=""
        error.style.visibility = "hidden";
        kainaInp.className = "form-control is-valid";
    }

}



skaiciuotiBtn.onclick = skaiciuoti;
// Kai kažkoks elementas paspaudžiamas
//kainaInp.onclick=ijungtiMygtuka;

//kainaInp.onblur=ijungtiMygtuka;
/*
kainaInp.onfocus=()=>{
    console.log("focus");
}
*/
kainaInp.oninput = ijungtiMygtuka;

//onclick -paspausta
//ononfocuse, onblur - aktyvuojamas deaktivuojamas
//onkeypress, onkeyup, onkeydown - mygtuku paspaudimai
//onchange (įvyksta kai elementa nužymimas ir pakeičiama reikšmė), oninput (kai pasikeičia reikšmė) - reiksmes pasikeitimas