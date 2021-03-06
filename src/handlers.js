const fs = require('fs');
const path = require('path');
const requester = require('request');
require('dotenv').config();
const KEY  = process.env.KEY;
const handlerHomeRoute = (response) => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-type': 'text/html' });
      response.end('<h1> Sorry, there was a server error</h1>');
    } else {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.end(file);
    }
  });
};

const handlePublic = (request, response) => {
  const { url } = request;
  const extention = url.split('.')[1];
  const extentionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
  };
  const filepath = path.join(__dirname, '..', url);
  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-type': extentionType.html });
      response.end('<h1>Sorry, there was a server error</h1>');
    } else {
      response.writeHead(200, { 'Content-type': extentionType[extention] });
      response.end(file);
    }
  });
};

const handlerNews = (response, section) => {
  requester(
    `http://content.guardianapis.com/${section}?&api-key=` + KEY,
    (err, res, body) => {
      if (err) {
        console.log(`Error ${err}`);
        response.writeHead(500, { 'content-type': 'text/plain' });
        return response.end('Sorry, there was a server error');
      }

      const info = JSON.parse(body);
      const { results } = info.response;

      const firstTenPosts = results.slice(0,9);

      response.writeHead(200, { 'Content-type': 'application/json' });
      response.end(JSON.stringify(firstTenPosts));
    },
  );
};
const handleIcon= (response)=>
{
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { 'Content-Type': 'image/x-icon' });
      response.end(file);
    }
  });
}
const handleNotFound = (response) => {
  response.writeHead(404);
  response.end('<h1>This page cannot be found</h1>');
};
module.exports = {
  handlerHomeRoute,
  handlePublic,
  handleNotFound,
  handlerNews,
  handleIcon
};
