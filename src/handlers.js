const fs = require('fs');
const path = require('path');
const requester = require('request');

const handlerHomeRoute = (response) => {
  const filepath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-type': 'text/html' });
      response.end('<h1> we have an error , sorry</h1>');
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
      response.end('<h1>there is an error</h1>');
    } else {
      response.writeHead(200, { 'Content-type': extentionType[extention] });
      response.end(file);
    }
  });
};

const handlerNews = (request, response, section) => {
  requester(
    `http://content.guardianapis.com/${section}?&api-key=e6a6ef2a-cf70-4f11-be1b-4d9feaaba6f0`,
    (err, res, body) => {
      if (err) {
        console.log(`Error ${err}`);
        response.writeHead(500, { 'content-type': 'text/plain' });
        return response.end('Sorry, there was a server error');
      }

      const info = JSON.parse(body);
      const { results } = info.response;
      const answer = [];
      for (let i = 0; i < 10; i++) {
        answer.push(results[i]);
      }

      response.writeHead(200, { 'Content-type': 'application/json' });
      response.end(JSON.stringify(answer));
    },
  );
};

const handleNotFound = (response) => {
  response.writeHead(404);
  response.end('<h1>page is not found</h1>');
};
module.exports = {
  handlerHomeRoute,
  handlePublic,
  handleNotFound,
  handlerNews,
};
