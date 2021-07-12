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

const port = process.env.PORT || 3030;
app.listen(port, () => { console.log(`Example app listening on port ${port}!`); });