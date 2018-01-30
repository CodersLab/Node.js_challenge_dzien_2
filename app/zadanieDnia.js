//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {
    if (err === null){
        let text = data;
        let res = text.split('').map(function(v,i){
            return i%2 === 0 ? v.toLowerCase():v.toUpperCase()
        });
        console.log(res.join(''));
        fs.writeFile('./data/zadanieDnia/test.txt', res.join(''), err => {
            if (err === null){
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });

    } else {
        console.log(`Błąd...`, err)
    }
});