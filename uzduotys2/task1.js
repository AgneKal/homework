const fs = require('fs');
let data = fs.readFileSync('data1.txt').toString().split(' ').map(Number);

console.log(data);

const minAndMaxTemp = (data) => {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < data.length; i++) {
        data[i] > max ? max = data[i] : max;
        data[i] < min ? min = data[i] : min;
    }
    return `Aukščiausia temperatūra šį mėnesį buvo ${data.indexOf(max) + 1} dieną, ${max}°C, žemiausia temperatūra šį mėnesį buvo ${data.indexOf(min) + 1} dieną, ${min}°C.`;
}
console.log(minAndMaxTemp(data));

const arr = [0, 1, 4, 6, 2, 1];
console.log(arr.indexOfAll());