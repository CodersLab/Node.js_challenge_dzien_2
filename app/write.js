const fs = require('fs');

fs.writeFile('./test.txt', 'Yoł, yoł', err => {
  if(err === null){
    console.log('Zapisano poprawnie!');
  } else{
    console.log('Wystąpił błąd z zapisem!', err);
  }
});
