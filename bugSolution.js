const http = require('http');

const server = http.createServer((req, res) => {
  doSomethingAsync()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });
});

async function doSomethingAsync() {
  try {
    await someDatabaseQueryThatMightThrowAnError();
  } catch (err) {
    throw new Error(`Failed to perform asynchronous operation: ${err.message}`);
  }
}

function someDatabaseQueryThatMightThrowAnError() {
  if (Math.random() < 0.5) {
    throw new Error('Database query failed!');
  }
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});