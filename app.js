const express = require('express');
const app = express();
const port = 8080;

let movies = require('./movies.json');

app.get('/', (req, res) => {
    res.send(movies);
});


app.listen(process.env.PORT || port, () => console.log(`App is listening`))