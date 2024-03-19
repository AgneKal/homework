const fs = require('fs');
let data = fs.readFileSync('data3.txt').toString().split('\r\n');

console.log(`----pirminis masyvas----`);

let arr = [];

data.forEach((d) => {
    arr.push(d.split(' ').map(Number));
})

arr.forEach(x => console.log(x.join(' ')));

console.log(`----pasuktas masyvas---`);

const rotateArr = [];

arr.forEach(subArr => {
    subArr.forEach((x, i) => {
        if (!rotateArr[i]) rotateArr[i] = [];
        rotateArr[i].push(x);
    });
});

rotateArr.forEach(x => console.log(x.join(' ')));