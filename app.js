const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const config = require("config");
const helmet = require("helmet");

app.use(helmet());

app.use('/files', express.static(__dirname + '/public'));
app.set('view engine', 'pug')
app.set('views', './views');

app.get("/", (request, response) => {

    response.render('index', {

        title: `Hello World`
        
    });

});

app.listen(port);