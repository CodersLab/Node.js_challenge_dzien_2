//Twój kod

const arg = process.argv[2];
const fs = require('fs');

if(!arg){
    console.log('give some arg please!')
}else{
    console.log(`mutch better: ${arg}`)
    fs.readFile(arg, 'utf8', (err, data) => {
        if (err === null) {
            console.log('poprawnie odczytano plik: ', typeof data, data.length);
            const str = data;
            const lowStr = str.toLowerCase();
            let newStr = '';

            for (i = 0; i < lowStr.length; i++) {
                 if (i % 2 == 0) {
                    newStr += lowStr[i].toUpperCase()
                } else {
                    newStr += lowStr[i]
                }
            }
            console.log(newStr)
        } else {
            console.log('Błąd podczas odczytu plik!', err);
        }
    });
}