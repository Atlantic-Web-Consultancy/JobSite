const express = require('express');
const axios = require('axios');

const app = express();
const path = require('path');

const port = 3000;
const parseCookies = require('../middleware/cookieParser.js');
const apiBase = 'http://3.137.145.92'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(parseCookies);
app.use('/', express.static(path.join(__dirname, '../dist')));

app.post('/login', (req, res) => {
  console.log('req incoming', req.body);
  axios.post(`${apiBase}/login`, {
    username: req.body.username,
    password: req.body.password
  })
  .then((response) => {
    res.cookie('jobsite', response.headers['set-cookie'][0].split('=')[1].split(';')[0]);
    res.end();
  })
  .catch((err) => {
    console.log('err', err);
  })
})

app.get('/employers/jobpostings', (req, res) => {
  axios.get(`${apiBase}/employers/jobpostings`, {
    headers: {
      Cookie: req.headers.cookie,
    }})
    .then((response) => {
      res.status(200)
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404)
      res.send(err);
    })
})

app.get('/seekers/applications', (req, res) => {
  axios.get(`${apiBase}/seekers/applications`, {
    headers: {
      Cookie: req.headers.cookie,
    }})
    .then((response) => {
      res.status(200)
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404)
      res.send(err);
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
