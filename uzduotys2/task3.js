const fs = require('fs');
let data = fs.readFileSync('data3.txt').toString().split('\r\n');

console.log(`----pirminis masyvas----`);

let arr = [];

data.forEach((d) => {
    arr.push(d.split(' ').map(Number));
})

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].toString().replaceAll(',', ' '));
}

console.log(`----pasuktas masyvas---`);

const rotateArr = [];

arr.forEach(subArr => {
    subArr.forEach((x, i) => {
        if (!rotateArr[i]) rotateArr[i] = [];
        rotateArr[i].push(x);
    });
});

for (let i = 0; i < rotateArr.length; i++) {
    console.log(rotateArr[i].toString().replaceAll(',', ' '));
}
