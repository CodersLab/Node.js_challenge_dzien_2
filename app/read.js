const fs = require('fs');

fs.readFile('./test.txt', 'utf8',(err,data) => {
  if(err === null){
    console.log('Sukces!', data);
  } else{
    console.log('Wystąpił błąd!', err)
  }
})
