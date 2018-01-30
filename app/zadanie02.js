//Twój kod

const fs = require("fs");
const dir = "./data/zadanie02/";

fs.readdir(dir, (err, files) => {
   if (err === null) {
       files.forEach(file => readFile(dir+file));
   }
   else {
       console.log("Nie udało się przeczytać katalogu: " + err);
   }

});


function readFile(file) {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err === null) {
            console.log(data);
        }
        else {
            console.log("Nie udało się odczytac pliku: " + file + "! " + err);
        }
    });
}