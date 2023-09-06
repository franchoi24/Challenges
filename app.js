const express = require('express');
const bodyParser = require('body-parser');
const challengeRoutes = require('./routes/challenge.js');
const path = require('path');
const app = express();
const errorController = require('./controllers/error.js');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(challengeRoutes);

app.use(errorController.get404);

app.listen(3000);
