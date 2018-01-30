const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
  if (err === null) {
    let sum = JSON.parse(data).reduce(((acc, val) => acc + val), 0);
    fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
      if (err === null) {
        console.log('Poprawnie odczytano i zapisano plik. Suma to:', sum);
      } else {
        console.log('Błąd podczas zapisu pliku!', err);
      }
    });
  } else {
    console.log('Błąd podczas odczytu pliku!', err);
  }
});
