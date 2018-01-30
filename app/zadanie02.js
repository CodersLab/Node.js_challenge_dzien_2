const fs = require('fs');

let path = './data/zadanie02/';

fs.readdir(path, (err, files) => {
	if (err) return console.log('Błąd odczytu katalogu');
	
	files.forEach(file => {
		console.log(`Nazwa pliku: ${file}`);
		let data = fs.readFileSync(`${path}${file}`);
		console.log(data.toString());
		console.log(`-----------------------------`);
	});
});