const request = require('request');
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const fs = require('fs');
const FILE_NAME = 'secrets.txt';

request.get(API_URL, (err, res, body) => {
    if (err) {
        throw err;
    }
    console.log(`Body: ${body}`);
    console.log(`Response status: ${res.statusCode}`);
    for (let header in res.headers) {
        console.log(`${header}=${res.headers[header]}`);
    }
})

fs.readFile(`./files/${FILE_NAME}`, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(`File content: ${data}`);
});

console.log(`Reading file ${FILE_NAME}...`);
console.log(`Requesting data from ${API_URL}`);