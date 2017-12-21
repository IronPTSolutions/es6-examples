const fs = require('fs');
const FILE_NAME = 'secrets.txt';

fs.readFile(`./files/${FILE_NAME}`, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(`File content: ${data}`);
});

console.log(`Reading file ${FILE_NAME}...`);