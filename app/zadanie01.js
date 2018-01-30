//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null){
        console.log('Poprawnie odczytano tablicę:', data);
        const arr = JSON.parse(data);
        let sum = arr.reduce(function (a, b) {return a + b;}, 0);
        console.log(`Suma elementów w talicy to: ` + sum);
    } else {
        console.log(`Błąd...`, err)
    }
});