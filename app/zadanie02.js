//Twój kod
const fs = require('fs');
const path = require('path');
const folderPath = './data/zadanie02';

// fs.readdir('./data/zadanie02', (err, files) => {
//     if (err === null) {
//         console.log('Lista plików:');
//         files.forEach(file => {
//             console.log(file);
//             // try {
//             //     const data = fs.readFileSync(file)
//             //     console.log(data)
//             // } catch (err) {
//             //     console.error(err)
//             // }
//             fs.readFile(file, 'utf8', (err, data) => {
//                 if (err === null) {
//                     console.log(data);
//                 } else {
//                     console.log('Błąd podczas odczytu pliku!', err);
//                 }
//             });
//         });
//
//     } else  {
//         console.log('Błąd podczas listowania katalogu!', err);
//     }
//
// });

const filesLinks = fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
});

filesLinks.forEach(file => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err === null) {
            console.log(data);
        } else {
            console.log('Błąd podczas odczytu pliku!', err);
        }
    })
})

