const fs = require('fs');

fs.readFile('/home/magdalena/Dokumenty/Coderslab/Dzien2/app/data/zadanie01/input.json', 'utf8', (err, data) => {
if (err==null){
console.log('Poprawnie odczytano plik', data);

var jason= JSON.parse(data);
var sum=0;

jason.forEach(element => {
    sum+=parseInt(element);
    
});
console.log(sum);

fs.writeFile('/home/magdalena/Dokumenty/Coderslab/Dzien2/app/data/zadanie01/sum.txt', sum, err => {
    if (err === null) {
        console.log('Zapisano poprawnie!');

    } else {
        console.log('Błąd podczas zapisu pliku', err);
    }
});
}

 else {
console.log('Błąd podczas odczytu', err); }
});
