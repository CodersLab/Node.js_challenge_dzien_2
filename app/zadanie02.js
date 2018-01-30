//Twój kod


const fs = require('fs');

fs.readdir('./data/zadanie02/', (err, files) => {
   if (err === null){
       console.log('W katalogu znajduja sie pliki:')
       files.forEach((file) => {
           console.log(file);
       });
   } else {
       console.log('Kurka wodna, cos tutaj poszlo nie tak. );', err);
   }
});