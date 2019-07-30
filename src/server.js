const http = require('http');
const router = require('./routers');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 4000;

http.createServer(router).listen(port, hostname, () => {
  console.log(`the server is running on port http://${hostname}:${port}`);
});
