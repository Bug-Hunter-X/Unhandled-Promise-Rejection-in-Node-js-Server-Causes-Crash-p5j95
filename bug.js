const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(err => {
    // Error handling is missing here.  The server will crash!
    console.error('Error:', err);
  });
});

async function doSomethingAsync() {
  // Simulate a database query that might throw an error
  // The error is not handled
  await someDatabaseQueryThatMightThrowAnError();
}

function someDatabaseQueryThatMightThrowAnError() {
  // Simulate an error condition
  if (Math.random() < 0.5) {
    throw new Error('Database query failed!');
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});