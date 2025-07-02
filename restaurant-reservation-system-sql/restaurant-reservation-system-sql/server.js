const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservation');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', reservationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}`);
});
