var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// Correct path to data.js from express.js
const { vegetables, fruits, farmLands } = require('../data'); 

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // Pass the data to the routes
    var indexRouter = require('../app/routes/index.server.routes.js')(vegetables, fruits, farmLands);
    app.use('/', indexRouter);

    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));

    return app;
};
