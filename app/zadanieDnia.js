//Twój kodc
const fs = require('fs');
const nazwa = process.argv[2];

let parse = (el,i)=>{
    if(i % 2 !== 0){
        return el.toUpperCase();
    }else{
        return el.toLowerCase();
    }
};

fs.readFile(nazwa, 'utf-8',(err, data )=> {
    if (err===null){
        let arr = data.split('').map(parse).join('');
        fs.writeFile(nazwa, arr ,er=>{
            if (er === null){
                console.log('Udane!');
            } else
            console.log('Blad odczytu!');
        })
    } else
        console.log('Blad odczytu' + err );
});