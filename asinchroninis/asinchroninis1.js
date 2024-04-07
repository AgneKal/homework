
const info = document.getElementById("info");
/*
setTimeout(()=>{
    info.textContent="puslapis uzkrautas";
    setTimeout(()=>{
        info.textContent="puslapis vykdymas";         
    },1000);
},Math.random()*3000);
*/
/*
Naudojant kintamuosius, nelabai efektyvu
//Rezultatą (promise) patalpiname į kintamąjį (objektas)
let fp=fetch('http://www.boredapi.com/api/activity/');
//Iškviečiam objekto metodus
fp.then( (response)=>{
  console.log("Duomenys parsiusti");
  let jp=response.json();
  jp.then((data)=>{
    console.log("Duomenys pakeisti į Objekta");
   console.log(data);
  })
});
*/
/*
//Programinis kodas panaikinus kintamuosius
fetch('http://www.boredapi.com/api/activity/')
 .then( (response)=>{
  console.log("Duomenys parsiusti");
    response.json()
        .then((data)=>{
            console.log("Duomenys pakeisti į Objekta");
            console.log(data);
  })
});
*/


//Programinis kodas sujungus kelis asinchjroninius veiksmus į grandinę 
fetch('http://www.boredapi.com/api/activity/')
    .then((response) => {
        //console.log("Duomenys parsiusti");
        return response.json();
    })
    .then((data) => {
        //console.log("Duomenys pakeisti į Objekta");
        //console.log(data);
        info.textContent = data.activity;

    });


console.log("Programa baigta");