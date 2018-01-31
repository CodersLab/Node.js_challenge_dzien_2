const fs = require('fs');

fs.readdir('./data/zadanie02', (err,files) =>{
  if(err === null){
    files.forEach(file => {
      fs.readFile('./data/zadanie02/'+file, 'utf8',(err, data) => {
        if(err===null){
          console.log(data);
        } else{
          console.log('Wystąpił błąd odczytu pliku!')
        }
      })
    })
  } else{
    console.log('Wystąpił błąd odczytu folderu!', err);
  }
})
