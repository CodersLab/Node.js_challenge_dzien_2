const fs = require('fs');
const fileName = 'test.txt'

// fs.writeFile(fileName, 'Hello world!', err => {
//   if (!err) {
//     console.log('Zapisano.');

//     fs.readFile(fileName, 'utf8', (err, data) => {
//       console.log(!err 
//         ? 'Poprawnie odczytano plik.\n' + data 
//         : 'Błąd podczas odczytywania pliku.\n' + err
//       );
//     });
//   } else {
//     console.log('Błąd podczas zapisywania pliku:\n' + err)
//   }

// });

fs.readdir('./ap', (err, files) => {
  if(!err) {
    console.log(files);
  } else {
    console.log(err);
  }
})