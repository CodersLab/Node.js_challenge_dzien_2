const fs = require("fs");

fs.readdir("./app/data/zadanie02", (err, files) => {
  if (err === null) {
    console.log("Działa ok, oto lista plików: ");
    files.forEach(file => {
      console.log(file);
      fs.readFile(`./app/data/zadanie02/${file}`, "utf8", (err, data) => {
        if (err === null) {
          console.log(data);
        } else {
          console.log("Coś chyba z tym readFilem :/");
        }
      });
    });
  } else {
    console.log("Nie bangla :/");
  }
});
