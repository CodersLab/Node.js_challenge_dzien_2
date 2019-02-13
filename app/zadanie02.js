//Twój kod
const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) => {
    if (err === null){
        console.log('lista plików:');
        files.forEach(file => {
            console.log(file);
        });
    } else {
        console.log('Błąd podczas listowania katalogu!', err);
    }
});