const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const config = require("config");

app.get("/", (request, response) => {

    response.send('ok');

});

app.listen(port);