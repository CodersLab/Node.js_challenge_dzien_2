const fs = require('fs');

const file = './data/zadanieDnia/test.txt';

fs.readFile(file, 'utf8', (err, data) => {
    if (err === null) {
        let text = '';
        [...data].forEach((e, i) => {
            text += (i % 2 === 0) ? e.toUpperCase() : e.toLowerCase();
        });
        fs.writeFile(file, text, err => {
            err === null? console.log('Plik został zmieniony i zapisany: ' + text) : console.log('Błąd zapisu pliku')
        })
    } else {
        console.log('Błąd odczytu pliku')
    }
});