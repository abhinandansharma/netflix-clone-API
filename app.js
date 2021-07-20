const express = require('express');
const app = express();
const port = 8080;

let movies = require('./movies.json');

app.get('/', (req, res) => {
    res.send(movies);
});


app.listen(port, () => console.log(`app listening on port ${port}!`))