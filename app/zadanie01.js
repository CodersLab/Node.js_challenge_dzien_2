//Twój kod

const fs = require("fs");

fs.readFile('./data/zadanie01/input.json', (err, data) => {
    if (err === null) {
        let sum = JSON.parse(data).reduce((a,b)=>{return a+b;});
        fs.writeFile('./data/zadanie01/sum.txt',sum, err => {
            if (err===null){
                console.log("Zapisano popranie!")
            } else
                console.log("Blad zapisu!")
        })
    } else
        console.log('Blad odczytu')

});