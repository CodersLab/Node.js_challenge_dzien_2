const fs = require('fs');

fs.readdir('../app/data/zadanie02', (err, files) => {
    if (err === null){
    files.forEach(file => {
        fs.readFile('../app/data/zadanie02/'+file, 'utf8', (err, data) => {
            if (err === null){
                console.log(data);
            } else {
                console.log('Błąd podczas odczytu pliku!', err);
            }
        });


});
} else {
    console.log('Błąd podczas listowania katalogu!', err);
}
});