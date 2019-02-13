//Twój kod
const fs = require('fs');
console.log('one')    //1

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null) {
        console.log('two')    // 3
        console.log(`Poprawnie odczytano plik. typu ${typeof data}: `, data);
    
        const dupa = JSON.parse(data);

        console.log(`zmienna: ${dupa[2]} typu: ${typeof dupa[2]}`)

        const sum = dupa.reduce((acc, cur) => {
            return acc + cur;
        })
        console.log(`sum of numbers: ${sum}`)

        fs.writeFile('./data/zadanie01/sum.txt', `sum of numbers from task 01 is: ${sum}`, err => {
            if (err === null){
                console.log('zapisano popranie!');
            } else {
                console.log(' Błąd podczas zapisu pliku!', err);
            }
        });





    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
    console.log('three') //4
});
console.log('four') //2