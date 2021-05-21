const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../dist')))



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});