const fs = require('fs');

fs.readdir('./data/zadanie02', (err, data) => {
	if (err === null) {
		data.forEach(dir => {
			console.log(dir);
		});
	} else {
		console.log(`We have an error: ${err}`);
	}
});