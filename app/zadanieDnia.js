//Twój kod

const fs = require('fs');

const textFile = process.argv[2];

fs.readFile(textFile, 'utf8', (err, data) => {
    if (err === null){
        let trawkaText = "";
        data.split("").map( (elem, index) => {
            trawkaText += (index % 2 === 0) ? elem.toUpperCase() : elem.toLowerCase();
        });

        fs.writeFile(textFile, trawkaText, err => {
            if (err === null){
                console.log('Poprawnie odczytano i zapisano plik');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});
