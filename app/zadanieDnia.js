const fs = require('fs');

function TrAwKa(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err === null) {
            let text = data.split(" ");
            for (let i = 0; i < text.length; i++){
                text[i] = text[i].split("");
                if (i%0 !== 2) {
                    text[i][0] = text[i][0].toLowerCase()
                }
                else {
                    text[i][0] = text[i][0].toUpperCase();
                }

                text[i] = text[i].join("");
            }
            return console.log(text.join(" "));

        } else {
            console.log('Błąd podczas odczytu pliku!', err);
        }
    });
}
TrAwKa(process.argv[2]);
