const fs = require('fs');

let read = () => {

    return new Promise((resolve, reject) => {

        fs.readdir('./data/zadanie02/', (err, files) => {
            if (err === null){
                resolve(files)
            } else {
                throw err;
            }
        });
    });    
}

let content = (files) => {
        files.forEach(file => {
            getContent(file);
        });
}

let getContent = (file) => {

    let fileDir = `./data/zadanie02/${file}`

    fs.readFile(fileDir, 'utf-8', (err, data) => {        
        if (err){
            throw err;
        } else {
            console.log(data); 
        }
    });

}

read().then((data) => { content(data) })

