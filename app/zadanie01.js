/**
 1. Przetwarzanie danych
 Napisz program, w którym otworzysz plik znajdujący się w app/data/zadanie01/input.json (z poziomu Twojego
 programu to będzie plik ./data/zadanie01/input.json).

 Jest to tablica liczb w formacie JSON. Aby ją rozkodować do tablicy JS skorzystaj z JSON.parse(daneWejsciowe).

 Następnie zsumuj wszystkie liczby, a wynik zapisz tekstem do pliku app/data/zadanie01/sum.txt.

 Pamiętaj, że funkcje odczytu i zapisu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

 ODCZYT PLIKU
 KIEDY SKOŃCZY - CALLBACK:
 ZMIANA JSONA NA TABLICĘ
 WYKONANIE SUMY
 ZAPIS PLIKU
 KIERY SKOŃCZY - CALLBACK:
 INFORMACJA O POWODZENIU LUB BŁĘDZIE

 Nie zapomnij o require() dla odpowiedniego modułu.
 */


const fs = require('fs');
var array;
var sum = 0;
fs.readFile('./data/zadanie01/input.json', 'utf8', function(err, content) {
    if (err === null) {
        array = JSON.parse(content);
        array.forEach(function (value) {
            sum += Number(value);
            // console.log(value);
        });

        fs.writeFile('./data/zadanie01/sum.txt', sum, function(err) {
            if(err === null){
                console.log('File has been saved');
            } else{
                console.log('Error while saving file');
            }
        });

    }else {
        console.log('Error reading file content!', err);
    }
});

