//Twój kod
const fs = require('fs');

//Odczytaj listę plików i folderów...
fs.readdir('./data/zadanie02/', (err, files) => {
    if (err === null){
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);
        });
    } else {
        console.log('Błąd podczas listowania katalogu!', err);
    }
});