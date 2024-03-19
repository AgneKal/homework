const fs = require('fs');
// let data = fs.readFileSync('data1.csv').toString().split(' '); <-- konkretus failas

let data = fs.readFileSync(process.argv[2]).toString().split('\r\n'); // <-- node nurodytas failas ir kelios eilutes


let line = 0;
let mas = [];

data.forEach((d) => {
    mas[line] = [];
    d.split(' ').forEach((x) => {
        mas[line].push(x);
    });
    line++
});

console.log(mas);

mas.forEach((line) => {
    let out = '';
    line.forEach((element) => {
        out += element = ' ';
    })
})
