//Twój kod

const fs = require('fs');
fs.readFile(`./data/zadanieDnia/${process.argv[2]}`, 'utf8', (err, data) => {
    if (err === null){ 
        console.log('Poprawnie odczytano plik.', data);
        var letter = []
        for(let i=0; i<data.length;i++){
            if(i%2===0){
                letter.push(data[i].toUpperCase())
            }else{
                letter.push(data[i].toLowerCase())
            }
        }
        let sentence =  letter.join("");
        fs.writeFile(`./data/zadanieDnia/${process.argv[2]}`, sentence, err => {
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
