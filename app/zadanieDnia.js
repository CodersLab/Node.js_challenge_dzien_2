//Twój kod
const fs = require('fs');

const alternativeCase = string => string.split('')
    .map((c,i) => i & 1 ? c.toUpperCase() : c.toLowerCase()).join('');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {
    if (err === null){
        // console.log(data);
        const edited = alternativeCase(data);
        fs.writeFile('./data/zadanieDnia/test.txt', edited, err  => {
            if (err === null) {
                console.log('zapisano', edited);
            } else {
                console.log('Błąd', err);
            }
        })
    } else {
        console.log(err);
    }
});
