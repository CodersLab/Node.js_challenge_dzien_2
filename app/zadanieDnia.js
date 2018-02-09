const fs = require('fs');

function TrAwKa(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err === null) {
            let text = '';
            [...data].forEach((e, i) => {
                text += (i % 2 === 0) ? e.toUpperCase() : e.toLowerCase();
            });
            fs.writeFile(fileName, text, err => {
                err === null? console.log('Plik został zmieniony w nieskoszoną TrAwKę:' +'\n\n'+ text) : console.log('Błąd zapisu pliku')
            })
        } else {
            console.log('Błąd odczytu pliku')
        }
    });
}
TrAwKa(process.argv[2]);