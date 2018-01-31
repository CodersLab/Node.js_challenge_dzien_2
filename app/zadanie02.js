//Twój kod
const fs = require('fs');

//Odczytaj listę plików i folderów...
fs.readdir('./data/zadanie02/', (err, files) => {
    if (err === null){
        files.forEach( file => {
            fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data) => {
                if (err === null){
                    console.log(`Poprawnie odczytano plik ${file}. Dane z pliku: `, data);
                } else {
                    console.log('Błąd podczas odczytu pliku!', err);
                }
            });
        });
    } else {
        console.log('Błąd podczas listowania katalogu!', err);
    }
});