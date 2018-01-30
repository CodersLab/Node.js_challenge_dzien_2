const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf-8', (err, data) => {
	if (err) return console.log('Błąd odczytu pliku!');
	
	let sum = JSON.parse(data).reduce((x, y) => x + y);
	
	fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
		let msg = err ? 'Błąd zapisu pliku' : 'Plik poprawnie zapisany';
		return console.log(msg)
	});
});