const fs = require('fs');
let rows = fs.readFileSync('data3.txt')
    .toString()
    .split('\r\n')
    .map(r => r.split(' ')
        .map(i => parseInt(i, 10)));

console.log(rows);

console.log(`----pirminis masyvas----`);

for (let i = 0; i < rows.length; i++) {
    console.log(rows[i].toString().replaceAll(',', ' '));
}

console.log(`----pasuktas masyvas---`);

const rotateArr = [];

rows.forEach((row, i) => {
    row.forEach((col, j) => {
        if (!rotateArr[j]) rotateArr[j] = [];
        rotateArr[j][i] = col;
    });
});

for (let i = 0; i < rotateArr.length; i++) {
    console.log(rotateArr[i].toString().replaceAll(',', ' '));
}
