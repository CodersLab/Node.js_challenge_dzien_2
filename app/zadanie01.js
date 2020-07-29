//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null){
        const arr = JSON.parse(data);
        const result = arr.reduce((acc, num) => {
            return acc + num
        });
        console.log(result);
        fs.writeFile('./data/zadanie01/sum.txt', '108', err => {
            if (err === null) {
                console.log('zapisano')
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        })
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});