const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const getCurrentDay = (currentDay) => {
  let day = '';
  switch (currentDay) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
    default:
      day = `Unknown day ${currentDay}`;
  }
  return day;
};

app.get('/', (req, res) => {
  const today = new Date();
  const currentDay = getCurrentDay(today.getDay());
  res.render('list', { day: currentDay });
});

app.listen(port, () => console.log(`Server starts on port ${port}`));