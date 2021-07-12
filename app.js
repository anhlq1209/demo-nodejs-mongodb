const express = require('express');
const bodyParser = require('body-parser');

const Database = require('./db/database');
const routes = require('./routes/controller');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './views');

//  Website routes
app.use('/', routes);

app.listen(3030, () => {
    console.log('Starting at port 3030...');
});