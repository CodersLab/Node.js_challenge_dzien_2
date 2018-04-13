/**
 Zadanie dnia: Program TrAwKa
 Dzisiejsze zadanie dnia pozwoli Ci stworzyć program "TrAwKa". Ma on modyfikować plik tekstowy w taki sposób,
 aby każdy nieparzysty znak był pisany wielką literą, a parzysty małą literą.

 Efekt będzie nieco przypominał nieprzystrzyżony trawnik ;) Np. plik z zawartością Hello, World! zamieni na
 HeLlO, wOrLd!.

 Wykorzystaj wiedzę z dnia pierwszego i spraw, aby nazwa pliku do modyfikacji mogła być podawana jako argument
 Twojego programu Node.

 Pamiętaj, że funkcje odczytu i zapisu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

 ODCZYT PLIKU
 KIEDY SKOŃCZY - CALLBACK:
 ZMIANA TEKSTU WEDŁUG WZORU
 ZAPIS TAKIEGO SAMEGO PLIKU
 KIERY SKOŃCZY - CALLBACK:
 INFORMACJA O POWODZENIU LUB BŁĘDZIE
 Zawsze wykonuj kopię zapasową pliku na którym operujesz!

 Do testu możesz posłużyć się plikiem w app/data/zadanieDnia/test.txt np. w ten sposób:

 node zadanieDnia.js ./data/zadanieDnia/test.txt
 To wszystko na dziś - gratulacje! Do jutra :)

 */

const fs = require('fs');
//var dirName = './data/zadanie02/';

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', function(err, content){
    if (err === null){
        console.log('Modifying every other letter to UpperCase:');
        // console.log(content);

        var modText = "";

        for(var i=0; i<content.length ;i++){
            modText += i % 2 === 0 ? content.charAt(i).toUpperCase() : content.charAt(i);
        }

        console.log(modText);

        fs.writeFile('./data/zadanieDnia/test.txt', modText, function (err) {
            if(err === null){
                console.log('File saved');
            }
            else{
                console.log('Error while saving file', err);
            }
        })

    } else {
        console.log('Error while reading file', err);
    }
});