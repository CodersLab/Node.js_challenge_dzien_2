const fs = require("fs");

fs.readFile("./app/data/zadanie01/input.json", (err, data) => {
  if (err === null) {
    const parsed = JSON.parse(data);
    const sum = parsed.reduce((prev, curr) => {
      return prev + curr;
    });
    fs.writeFile("./app/data/zadanie01/sum.txt", sum, err => {
      if (err === null) {
        console.log("Zapisano elegancko");
      } else {
        console.log("Coś nie pykło z tym zapisaniem");
      }
    });
  } else {
    console.log("Coś nie bangla");
  }
});
