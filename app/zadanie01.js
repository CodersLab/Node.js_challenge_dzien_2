//Twój kod

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json',(err,data) => {
  if (err == null){
    let dane = JSON.parse(data);
    let result = dane.reduce((prev,next) => prev+next);
    fs.writeFile('./data/zadanie01/sum.txt',result,err => {
      if(err == null){
        console.log('Zapis do pliku zakończony powdzeniem');
      } else {
        console.log('Błąd zapisu pliku');
      }
    });
  } else {
    console.log('Błąd odczytu danych');
  }
});
