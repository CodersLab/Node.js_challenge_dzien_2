const fs = require('fs');

fs.writeFileSync('./copy.txt', fs.readFileSync(process.argv[2]));

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err === null) {
    let newText = "";
    for (let i = 0; i < data.length; i++) {
      newText += (i % 2 === 0) ? data[i].toUpperCase() : data[i].toLowerCase();
    }
    fs.writeFile(process.argv[2], newText, err => {
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
