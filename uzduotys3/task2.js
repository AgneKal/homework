const fs = require('fs');
let data = fs.readFileSync('data2.txt').toString().split('\r\n');

const arr = [];
data.forEach((d) => {
    arr.push(d.split(' ').map(Number));
})

console.log(`---pirminis---`);

const n = arr.length;

for (let i = 0; i < n; i++) {
    let s = "";
    for (let y = 0; y < n; y++) {
        s += `${arr[i][y]} `;
    }
    console.log(s);
}

console.log(`---00---`);

for (let i = 0; i < n; i++) {
    let s = "";
    for (let y = 0; y < n; y++) {
        if (y === i || y + i === n - 1) {
            arr[y][i] = 0;
            s += `${arr[y][i]} `;
        } else {
            s += `${arr[y][i]} `;
        }
    }
    console.log(s);
}

