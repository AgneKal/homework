/*
class Zmogus{
    vardas ="";
    amzius =0;
    teiginys;

    atspausdinti() {
        console.log(this.vardas);
        this.teiginys();
    }
}

const jonas=new Zmogus();
jonas.vardas="Jonas";
jonas.amzius=25;
jonas.teiginys= ()=>{
    console.log("Labas as Jonas");
    console.log("Ka veiki");
};
jonas.atspausdinti();

const petras=new Zmogus();
petras.vardas="Petras";
petras.teiginys=()=>{
    for(let i=0; i<10; i++){
        console.log("labas "+i);
    } 
}
petras.atspausdinti();
*/



//Pasiemame objekta
const ivedimas = document.getElementById("ivedimoLaukas");

const mygtukas = document.createElement("button");

mygtukas.textContent = "Paspausk";

ivedimas.appendChild(mygtukas);
/*
ivedimas.onclick=()=>{
    console.log("Paspaude");
}
*/
//Keiciame objekto atributą
//ivedimas.placeholder="asd";
// HTMLElement