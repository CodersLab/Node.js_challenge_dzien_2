const fs = require('fs');

let read = (filePath) => {

    return new Promise((resolve, reject) => {

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err === null){
                resolve(data)
            } else {
                throw err;
            }
        });
    });    
}

let camelWords = (text) => {

    let allText = '';

    for(letter in text){
        if(letter % 2 === 0){
            allText += text[letter].toUpperCase();
        } else {
            allText += text[letter];
        }
    }

    return allText;
}

let saveText = (filePath, text) => {

    fs.writeFile(filePath, text, (err) => {
        if (err) throw err;
    });

}

let filePath = '';

process.argv.forEach((val, index) => {
    
    if(index === 2){
        filePath = val;

        read(filePath)
        .then((data) => { return camelWords(data) } )
        .then((text) => { saveText(filePath, text) } );
    };
    
});