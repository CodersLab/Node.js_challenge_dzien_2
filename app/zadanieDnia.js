//Twój kod

const fs = require('fs');
const fileName = process.argv[2];

fs.readFile('./data/zadanieDnia/' + fileName, 'utf8', (err, data) => {
   if (err === null){
       console.log('Odczytalem plik.');
       let file = '';
      for (let i = 0; i < data.length; i++){
          if (i % 2){
              file += data[i].toLowerCase();
          } else {
            file += data[i].toUpperCase();
          }
      }
    fs.writeFile('./data/zadanieDnia/' + fileName, file, err => {
       if (err === null){
           console.log('Zapisalem plik.');
       } else {
           console.log('Kurza twarz, cos poszlo nie tak.', err);
       }
    });
   } else {
       console.log('Motyla noga! Nie udalo mi sie odczytac pliku', err);
   }
});