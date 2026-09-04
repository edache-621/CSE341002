const express = require('express');

const app = express();

const lesson1controller = require('./controllers/lesson1');

const port = 3000

app.use('/', require('./routes'));

app.listen(process.env.PORT || port, () => {
    console.log(
        'web server is listening at port ' + (process.env.PORT || port)
    );
});