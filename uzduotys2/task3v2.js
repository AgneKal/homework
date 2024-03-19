const fs = require('fs');
let rows = fs.readFileSync('data3.txt')
    .toString()
    .split('\r\n')
    .map(r => r.split(' ')
        .map(i => parseInt(i, 10)));

console.log(`----pirminis masyvas----`);

rows.forEach(x => console.log(x.join(' ')));

console.log(`----pasuktas masyvas---`);

const rotateArr = [];

rows.forEach((row, i) => {
    row.forEach((col, j) => {
        if (!rotateArr[j]) rotateArr[j] = [];
        rotateArr[j][i] = col;
    });
});

rotateArr.forEach(x => console.log(x.join(' ')));
