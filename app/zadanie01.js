const fs = require('fs');
const path = './data/zadanie01';
fs.readFile(`${path}/input.json`, 'utf8', (error, data) => {
    if (error) {
        console.error('Błąd podczas odczytu pliku!', error);
    } else {
        const arrayOfNumbers = JSON.parse(data);
        let arraySum = 0;
        arrayOfNumbers.forEach((value) => arraySum += value);
        fs.writeFile(`${path}/sum.txt`, arraySum, err => {
            if (err === null){
                console.info('Zapisano poprawnie!');
            } else {
                console.error('Błąd podczas zapisu pliku!', err);
            }
        });
    }
});
