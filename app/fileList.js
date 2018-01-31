const fs = require('fs');

fs.readdir('./', (err, files) => {
  if(err===null){
    console.log('Lista plików:');
    files.forEach(file => {
      console.log('- ' + file);
    })
  } else{
    console.log('Wystąpił błąd!', err)
  }
})
