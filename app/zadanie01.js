//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null){ 
        console.log('Poprawnie odczytano plik.', data);
        let dataParsed = JSON.parse(data);
        var sum = dataParsed.reduce((prev,curr)=>{return prev+curr})
        fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
            if (err === null){
                console.log("Sukces!");
    } else { 
        console.log('Błąd podczas odczytu pliku!', err);
    }
    });
    }else{ 
        console.log('Błąd podczas odczytu pliku!', err);
    }
});
