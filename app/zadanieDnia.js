const fs = require('fs');

function TrAwKa(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err === null) {
            let text = '';
            for (let i = 0; i < data.length; i++) {
                if (i % 2 !== 0) {

                    text += data[i].toUpperCase();
                }
                else {
                    text += data[i].toLowerCase();
                }
            }
            return fs.writeFile(fileName, text, err => {
                if (err === null) {
                    console.log('Plik został zmieniony w nieskoszoną TrAwKę:' + '\n\n' + text);
                } else {
                    console.log("błąd zapisu", err);
                }
            })
        } else {
            console.log('Błąd podczas odczytu pliku!', err);
        }
    });
}

TrAwKa(process.argv[2]);

// //version 2:
// const fs = require('fs');
// function TrAwKa(fileName) {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err === null) {
//             let text = '';
//             [...data].forEach((e, i) => {
//                 text += (i % 2 === 0) ? e.toUpperCase() : e.toLowerCase();
//             });
//             fs.writeFile(fileName, text, err => {
//                 err === null? console.log('Plik został zmieniony w nieskoszoną TrAwKę:' +'\n\n'+ text) : console.log('Błąd zapisu pliku')
//             })
//         } else {
//             console.log('Błąd odczytu pliku')
//         }
//     });
// }
// TrAwKa(process.argv[2]);




