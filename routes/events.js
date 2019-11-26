const express= require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('events', {title: 'Events'});
});

router.get('/show/:id', (req, res, next) => {
    res.render('event', {title: 'Event'});
});

router.get('/menu/:menu_id', (req, res, next) => {
    res.render('events', {title: 'Menu Events'});
});
module.exports = router;