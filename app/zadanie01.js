//Twój kod

const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
   if (err === null) {
    let file = 0;
       JSON.parse(data).forEach((element) => {
           file += element; 
       });
       
       fs.writeFile('./data/zadanie01/sum.txt', file, err => {
          if (err === null){
              console.log('Zapisalem dane do pliku');
          } else {
              console.log('Ojej wpadlem w tarapaty i nic nie zapisalem. );', err)
          }  
       });
   } else {
       console.log('Nie udalo sie odczytac pliku. );', err);
   }
});

