const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send(`It is fun to learn!!!`);
});

app.listen(port, () => console.log(`Server starts on port ${port}`));