//Twój kod
const fs = require('fs');
const inputFile = './data/zadanie01/input.json';
const outputFile = './data/zadanie01/output.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if(!err) {
    const values = JSON.parse(data);
    const sum = values.reduce((prev, next) => prev + next);
    fs.writeFile(outputFile, `${values}\nSuma elementów: ${sum}`, err => {
      console.log(!err ? 'Policzone!' : 'Błąd podczas zapisu:\n' + err);
    })
  } else {
    console.log('Błąd podczas odczytu:\n' + err);
  }
});