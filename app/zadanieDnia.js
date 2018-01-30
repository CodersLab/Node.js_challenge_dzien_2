const fs = require('fs');

fs.writeFileSync('./data/zadanieDnia/test-copy.txt', fs.readFileSync('./data/zadanieDnia/test.txt'));

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {
  if (err === null) {
    let newText = "";
    for (let i = 0; i < data.length; i++) {
      newText += (i % 2 === 0) ? data[i].toUpperCase() : data[i].toLowerCase();
    }
    fs.writeFile('./data/zadanieDnia/test.txt', newText, err => {
      if (err === null) {
        console.log('Poprawnie odczytano i zapisano zmieniony plik');
      } else {
        console.log('Błąd podczas zapisu pliku!', err);
      }
    });
  } else {
    console.log('Błąd podczas odczytu pliku!', err);
  }
});
