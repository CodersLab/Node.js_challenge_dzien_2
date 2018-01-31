const fs = require('fs');

fs.writeFile('./test.txt', "Hello, World!", err => {
  if(err === null){

    fs.readFile('./test.txt', 'utf8', (err,data) => {
      if(err === null){
        console.log('Poprawnie zapisano i oczytano plik!', data);
      } else{
        console.log('Wystąpił błąd z odczytem!', err);
      }
    })
  } else{
    console.log('Wystąpił błąd z zapisem!', err);
  }
});
