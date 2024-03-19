const fs = require('fs');
let data = fs.readFileSync('data2.txt').toString().split(' ').map(Number);

function countNumbers(data) {
    const arr = Array(10).fill(0);
    for (let i = 0; i < data.length; i++) {
        arr[data[i]]++;
    }
    return `Masyve yra nulių: ${arr[0]}, vienetų: ${arr[1]}, dvejetų: ${arr[2]}, trejetų:${arr[3]}, ketvirtų: ${arr[4]}, penketų: ${arr[5]}, šešetų:${arr[6]}, septynetų: ${arr[7]}, aštuonetų: ${arr[8]}, devynetų: ${arr[9]}.`
}

console.log(countNumbers(data));