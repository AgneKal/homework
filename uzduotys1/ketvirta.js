// Užduotis 4(For):
// Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi, jei jo skaitmenų, pakeltų 3 - uoju laipsniu, suma lygi pačiam skaičiui.Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999.

function armstrongNum(num) {
    const numbers = num.toString().split('').map(Number);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let cube = numbers[i] ** 3;
        sum += cube;
    }
    return sum === num ? true : false;
}

function allArmstrongNum() {
    let min = 100;
    let max = 999;
    const arr = [];
    for (let i = min; i <= max; i++) {
        if (armstrongNum(i) === true) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(allArmstrongNum());
