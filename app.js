const express= require ('express');
const path = require ('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/foodblog');
const db = mongoose.connection;

const port = 3000;

const app = express();

const events = require('./routes/events');
const index = require('./routes/index');
const manage = require('./routes/manage');
const menu = require('./routes/menus');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        const namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

app.use('/', index);
app.use('/events', events);
app.use('/manage', manage);
app.use('/menu', menu);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});