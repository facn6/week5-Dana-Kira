const test = require('tape');
const supertest = require('supertest');
const router = require('../src/routers.js');


test('Demo', (t) => {
  const num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

test('Home route returns a status code of 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, 'Should return 200');
      t.end();
    });
});

test('Non exsistent pages return a status code of 404', (t) => {
  supertest(router)
    .get('/tech')
    .expect(404)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, 'Should return 404');
      t.end();
    });
});

test('Main.css route returns Content-Type: css', (t) => {
  supertest(router)
    .get('/public/main.css')
    .expect('Content-Type', /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.header['content-type'], 'text/css', 'Content-Type should be CSS');
      t.end();
    });
});
