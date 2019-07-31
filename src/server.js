const http = require('http');
const router = require('./routers');

const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 4005;

http.createServer(router).listen(port, hostname, () => {
  console.log(`the server is running on port http://${hostname}:${port}`);
});
