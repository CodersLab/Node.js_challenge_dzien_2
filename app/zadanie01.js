const fs = require('fs');

let read = () => {

    return new Promise((resolve, reject) => {

    fs.readFile('./data/zadanie01/input.json', 'utf-8', (err, data) => {        
            if (err){
                throw err;
            } else {
                resolve(data);    
            }
        });
    });
}

let sum = (data) => {

        let dataArr = JSON.parse(data);
        let sum = 0;
        
        for(index in dataArr){ 
            sum += dataArr[index] 
        }
        return sum;
}

let write = (sum) => {

    fs.writeFile('./data/zadanie01/sum.txt', sum, (err) => {
        if (err) throw err;
    });

}

read()
.then((data) => { return sum(data) })
.then((sum) => { write(sum) } );
