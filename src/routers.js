
const handlers = require('./handlers.js');

const router = (req, res) => {
  if (req.url === '/') {
    handlers.handlerHomeRoute(res);
  } else if (req.url.indexOf('public') !== -1) {
    handlers.handlePublic(req, res);
  } else if (req.url === '/politics' || req.url === '/fashion' || req.url === '/environment' || req.url === '/football' || req.url === '/business') {
    const section = req.url;
    handlers.handlerNews(req, res, section);
  } else {
    handlers.handleNotFound(res);
  }
};

module.exports = router;
