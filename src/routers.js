
const handlers = require('./handlers.js');

const router = (req, res) => {
  if (req.url === '/') {
    handlers.handlerHomeRoute(res);
  } else if (req.url.indexOf('public') !== -1) {
    handlers.handlePublic(req, res);
  } else if (req.url === '/news') {
    handlers.handlerNews(req, res);
  }else if(req.url === '/lifestyle'){
    
  }else if(req.url === '/tech'){
    
  }else if(req.url === '/football'){
    
  }else if(req.url === '/buisness'){
    
  }else {
    handlers.handleNotFound(res);
  }
};

module.exports = router;
