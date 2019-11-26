const express= require('express');
const router = express.Router();

router.get('/events', (req, res, next) => {
    res.render('manage_events', {title: 'Manage Events'});
});

router.get('/menus', (req, res, next) => {
    res.render('manage_menus', {title: 'Manage Menus'});
});

router.get('/events/add', (req, res, next) => {
    res.render('add_event', {title: 'Create Event'});
});

router.get('/menus/add', (req, res, next) => {
    res.render('add_menu', {title: 'Create Menu'});
});

router.get('/events/edit/:id', (req, res, next) => {
    res.render('edit_event', {title: 'Edit Event'});
});

router.get('/menus/edit/:id', (req, res, next) => {
    res.render('edit_menu', {title: 'Edit menu'});
});
module.exports = router;