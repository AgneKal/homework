const fs = require('fs');
let str = fs.readFileSync('data1.json').toString();

const students = JSON.parse(str);

console.log(`Viso studentų: ${students.length}`);

const allAges = [];
students.forEach((student) => allAges.push(student.amzius));
const studentMid = ((allAges.reduce((a, b) => ((a + b)), 0,)) / allAges.length).toFixed(0);

console.log(`Visų studentų amžiaus vidurkis: ${studentMid} metai.`);

const allGrades = [];
students.forEach((student) => student.pazymiai.forEach((x) => allGrades.push(x)));

const gradesMid = (allGrades.reduce((a, b) => a + b, 0,) / allGrades.length).toFixed(1);

console.log(`Visų studentų pažangumo vidurkis: ${gradesMid}.`);

students.forEach((student) => {
    console.log(`${student.vardas} ${student.pavarde} (${student.amzius}), pažymiai: ${student.pazymiai.join(', ')}, pažymių vidurkis: ${(student.pazymiai.reduce((a, b) => ((a + b)), 0,) / student.pazymiai.length).toFixed(1)}.`)
})


