const express = require('express');
const axios = require('axios');

const app = express();
const path = require('path');

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../dist')));

app.post('/login', (req, res) => {
  console.log('req incoming', req.body);
  axios.post('http://3.137.145.92/login', {
    username: req.body.username,
    password: req.body.password
  })
  .then((response) => {
    console.log('req going to client', response);
    res.cookie('jobsite', response.headers['set-cookie'][0].split('=')[1].split(';')[0]);
    res.end();
  })
  .catch((err) => {
    console.log('err', err);
  })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
