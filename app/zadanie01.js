const fs = require('fs');

fs.readFile( './data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err===null) {
        let sum = JSON.parse(data).reduce((prev,curr)=> prev+curr);
        fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
            err === null ? console.log("Suma wynosi: " + sum) : console.log("Błąd podczas zapisu pliku");
        });
    } else {
        console.log("Błąd podczas odczytu pliku");
    }
});