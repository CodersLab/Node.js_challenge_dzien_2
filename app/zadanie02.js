const fs = require('fs');
const dir='/home/magdalena/Dokumenty/Coderslab/Dzien2/app/data/zadanie02';

fs.readdir(dir, (err, files) => {

    if (err === null) {
        console.log('Lista plików:');
        files.forEach(file => {
            console.log(file);

            fs.readFile(dir + '/' + file, 'utf8', (err, data) => {
                if (err === null){
                    console.log('Poprawnie odczytano plik.', data);
                } else {
                    console.log('Błąd podczas odczytu pliku!', err);
                }
            });

        
        });
    } else {
        console.log('Błąd podczas listowania katalogu!', err);

    }
    });
