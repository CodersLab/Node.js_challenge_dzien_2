//Twój kod
const fs = require('fs');

const path = './data/zadanie02/';

const readContent = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (!err) {
      console.log(filePath.includes('.json') ? JSON.parse(data) : data);
    } else {
      console.log(`Błąd podczas czytania pliku:\n`, err);
    }
  });
}

fs.readdir(path, (err, files) => {
  if (!err) {
    files.forEach(file => {
      readContent(path + file);
    });
  } else {
    console.log('Błąd podczas czytania listy plików.\n', err);
  }
});