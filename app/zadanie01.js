//Twój kod

const fs = require("fs");

fs.readFile("./data/zadanie01/input.json", "utf-8", (err, data) => {
    if (err === null){
        let sum = 0;
        JSON.parse(data).forEach(a => sum += a);
        fs.writeFile("./data/zadanie01/sum.txt", sum, err => {
            if (err === null) {
                console.log("Zapisano wynik!");
            }
            else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        });
    }
    else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});