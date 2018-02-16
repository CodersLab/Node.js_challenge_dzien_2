const fs = require('fs');
let name = process.argv[2];
let string = '';

fs.readFile(name, 'utf8', (err, data) => {
	if (err === null) {
		for (let i = 0; i < data.length; i++) {
			let char = i % 2 ? data[i].toLowerCase() : data[i].toUpperCase();
			string += char;
		}

		fs.writeFile(name, string, err => {
			if (err !== null) 
				console.log(`We have an error: ${err}`);
		});

	} else {
		console.log(`We have an error: ${err}`);
	}
});

function saveChar(char) {
	fs.writeFile(name, char, err => {
		if (err == null) {
			
		}
	});
}