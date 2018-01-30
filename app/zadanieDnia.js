//Twój kod

const fs = require("fs");
const file = process.argv[2];

if (typeof file === 'undefined') {
    console.log("Wymagany parametr!");
    process.exit(1);
}

fs.readFile(file, 'utf-8', (err, data) => {
    if ((err === null)) {
        let result = '';
        data.split('').forEach((letter, index) => { (index % 2 === 0) ? result += letter.toUpperCase() : result += letter.toLowerCase(); });

        fs.writeFile("./data/zadanieDnia/result.txt", result, err => {
            if (err === null) {
                console.log("Zapisano wynik!");
            }
            else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        })
    }
    else {
        console.log(err);
    }
});
