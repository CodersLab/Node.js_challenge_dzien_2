//Twój kod
const fs = require('fs');

const defaultFilePath = './data/zadanieDnia/test.txt';
const filePath = process.argv[2];
const outputPath = './data/zadanieDnia/output.txt'

const setCase = (letter, index) => {
  return index % 2 != 0 ? letter.toUpperCase() : letter.toLowerCase();
}

const transformText = (text) => {
  let result = '';
  for (let i = 0, len = text.length; i < len; i++) { //czy jest zgrabniejsza metoda iterowania po tekście pozwalająca przekazać indeks litery?
    result += setCase(text[i], i);
  }
  return result;
}

fs.readFile(filePath || defaultFilePath, 'utf8', (err, data) => {
  if (!err) {
    fs.writeFile(outputPath, transformText(data), err => console.log(!err ? 'Posiano trawę tutaj: ' + outputPath : 'Błąd podczas zapisywania wyniku do pliku:\n' + err));
  } else {
    console.log('Błąd podczas czytania pliku:\n', err);
  }
});