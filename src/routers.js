const handler = require('./handlers.js');

const router = (req, res) => {
  if (req.url === '/') {
    handler.handlerHomeRoute(res);
  }
};

module.exports = router;
