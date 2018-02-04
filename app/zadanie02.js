//Twój kod
const fs = require('fs');

fs.readdir('./data/zadanie02',(err,files) => {
  if (err === null){
    files.forEach((file) => {
      //console.log(file);
      fs.readFile('./data/zadanie02/'+file,'UTF-8',(err,data) => {
        if (err === null){
          console.log(data);
        } else {
          console.log(`Błąd odczytu pliku`);
        }
      });
    });
  } else {
    console.log('Błąd odczytu listy plików');
  }
});
