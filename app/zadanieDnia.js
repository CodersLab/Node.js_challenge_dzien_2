//Twój kod
const fs = require('fs');

let [element,index,fileName] = [...process.argv];

fs.readFile('./data/zadanieDnia/'+fileName,'UTF-8',(err,data) => {
  if (err === null){

    let textData = [...data];

    fs.writeFile('./data/zadanieDnia/copy_'+fileName,data,err => {
      //tworzenie kopii zapasowej

      if (err === null){

        let textChanged = textData.map((element,index) => {

          if (!(index % 2)) {
            return element.toUpperCase();
          } else {
            return element.toLowerCase();
          }
        });

        fs.writeFile('./data/zadanieDnia/c_'+fileName,textChanged.join(''),err => {
          if (err ===null) {
            console.log('Zapis zakończył się sukcesem');
          }
        });

      } else {
        console.log('Błąd tworzenia kopii zapasowej');
      }
    });
  } else {
    console.log('Błąd odczytu pliku');
  }
});
