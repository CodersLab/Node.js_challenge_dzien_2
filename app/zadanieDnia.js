const fs = require('fs');

const path = process.argv.slice(2).toString();

let trawka = (path) => {
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) return console.log('Błąd odczytu pliku');
		
		let newData = [...data].map((elem, i) => {
			return i % 2 === 0 ? elem.toUpperCase() : elem
		})
		
		console.log(newData.join(''))
		
		fs.writeFile(path, newData.join(''), err => {
			let msg = err ? 'Błąd zapisu pliku' : 'Plik poprawnie zapisany';
			return console.log(msg);
		})
	});
};

trawka(path)