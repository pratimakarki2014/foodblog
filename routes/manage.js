const express= require('express');
const router = express.Router();

Menu = require('../models/menu.js');

router.get('/events', (req, res) => {
    res.render('manage_events', {title: 'Manage Events'});
});

router.get('/menus', (req, res) => {
    Menu.getMenus((err, menus) => {
        if(err){
            res.send(err);
        }
        res.render('manage_menus', {
            title: 'Menus',
            menus: menus
        });
    });
});

router.get('/events/add', (req, res) => {
    res.render('add_event', {title: 'Create Event'});
});

router.get('/menus/add', (req, res) => {
    res.render('add_menu', {title: 'Create Menu'});
});

router.get('/events/edit/:id', (req, res) => {
    res.render('edit_event', {title: 'Edit Event'});
});

router.get('/menus/edit/:id', (req, res) => {

    Menu.getMenuById(req.params.id,(err, menu) => {
        if(err){
            res.send(err);
        }
        res.render('edit_menu', {
            title: 'Edit menu',
            menu: menu
        });
    });
});
module.exports = router;