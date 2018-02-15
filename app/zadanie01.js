const fs = require('fs');

fs.readFile('../app/data/zadanie01/input.json', 'utf8', (err, data) => {
            if (err === null){
            console.log('Poprawnie odczytano plik.', data);
            let arr = JSON.parse(data);
            function sum (x){
                let y= 0;
                for (i=0; i<arr.length; i++) {
                    y +=arr[i];
                }
                return y;
            }
                    fs.writeFile('../app/data/zadanie01/sum.txt', sum(arr), err => {
                        if (err === null){
                        console.log('Zapisano sumę poprawnie!');
                    } else {
                        console.log('Błąd podczas zapisu sumy w pliku!', err);
                    }
                });

        } else {
            console.log('Błąd podczas odczytu pliku jSON!', err);
        }
});