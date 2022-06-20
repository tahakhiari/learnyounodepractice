const http = require ('http');
const url = process.argv [2];

http.get(url, (response) => {
    response.on('error', (err) => console.error(err));
    response.setEncoding('utf-8');
    response.on('data', data => {
        console.log(data);
    })
})