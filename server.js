const express = require('express');

const app = express();

const lesson1controller = require('./controllers/lesson1');

app.get('/', lesson1controller.sarahRoute);

app.get('/hannah', lesson1controller.hannahRoute);

const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log(
        'web server is listening at port ' + (process.env.PORT || port)
    );
});