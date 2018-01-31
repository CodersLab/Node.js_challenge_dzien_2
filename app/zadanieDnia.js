//Twój kod
const fs = require('fs');
const fileName = process.argv[2];
const path = `./data/zadanieDnia/${fileName}`;

fs.readFile(path, 'utf8', (error_read, data) => {
    if (error_read === null){
        let content = '';
        for (let i = 0; i < data.length; i += 1){
            console.log('znak data[i] =', data[i]);
            content += (i % 2 === 0) ? data[i].toUpperCase() : data[i].toLowerCase();
        }
        fs.writeFile(`./data/zadanieDnia/test2.txt`, content, error_write => {
            if (error_write === null){
                console.log('zapisno plik.');
            } else {
                console.log('blad zapisu:', error_write);
            }
        });
    } else {
        console.log('nie udalo sie odczytac pliku =', error_read);
    }
});
