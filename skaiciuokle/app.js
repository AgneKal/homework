const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const w = weight.valueAsNumber;
    const h = height.valueAsNumber;
    const kmi = w / ((h / 100) ** 2);
    rez.innerHTML = `KMI: ${kmi.toFixed(2)}`;
}

btn.onclick = skaiciuoti;