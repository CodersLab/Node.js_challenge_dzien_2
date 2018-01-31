//Twój kod

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null){
        const arrParsed = JSON.parse(data);
        const sum = arrParsed.reduce( (prev, curr) => { return prev + curr } );

        fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
            if (err === null){
                console.log('Poprawnie odczytano i zapisano plik! Suma wynosi: ', sum);
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});