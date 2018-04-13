/**
 2. Zawartość wszystkich plików w katalogu
 Napisz program, który wyświetli zawartość wszystkich plików w folderze app/data/zadanie02/.

 Skorzystaj z możliwości listowania plików w folderze. Po otrzymaniu listy plików wyświetlaj je w pętli.

 Pamiętaj, że funkcje listowania i odczytu są asynchronicze! Twój kod powinien odpowiadać takiemu pseudokodowi:

 LISTOWANIE ZAWARTOŚCI KATALOGU
 KIEDY SKOŃCZY - CALLBACK:
 PĘTLA DLA KAŻDEJ NAZWY PLIKU
 ODCZYT PLIKU
 KIERY SKOŃCZY - CALLBACK:
 WYŚWIETLENIE ZAWARTOŚCI PLIKU LUB INFORMACJI BŁĘDZIE

 */

const fs = require('fs');
var dirName = './data/zadanie02/';

fs.readdir(dirName, function(err, files){
    if (err === null){
        console.log('List of files:');
        files.forEach(function(file) {
            // console.log(file);
            fs.readFile(dirName+file, 'utf8', function (err, content) {
                if(err === null){
                    console.log('File content: ', content);
                }else{
                    console.log('Error - cannot display the content of a file', err);
                }
            })
        });

    } else {
        console.log('Error while listing files', err);
    }
});