const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', (error, data) => {
	if (error === null) {
		let obj = JSON.parse(data),
			sum = 0;	
		obj.forEach(el => {
			sum += el;
		});
		
		fs.writeFile('./data/zadanie01/sum.txt', sum, error => {
			console.log(error === null ? `success: ${sum}` : `We have an error: ${error}`);
		});

	} else {
		console.log(`We have an error ${error}`);
	}
});