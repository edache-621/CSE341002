const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.sarahRoute);
routes.get('/hannah', lesson1controller.hannahRoute);
routes.get('/emmanuel', lesson1controller.Emmanuel);

module.exports = routes;