const express= require('express');
const router = express.Router();

Menu = require('../models/menu.js');

router.get('/', (req, res, next) => {
    Menu.getMenus((err, menus) => {
        if(err){
            res.send(err);
        }
        res.render('menus', {
            title: 'Menus',
            menus: menus
        });
    });
});

router.post('/add', (req, res, next) => {
    let menu = new Menu();
    menu.title = req.body.title;
    menu.description = req.body.description;
    menu.ingredients = req.body.ingredients;

    Menu.addMenu(menu, (err, menu) => {
       if(err){
           res.send(err);
       }
       res.redirect('/manage/menus');
    });
});

module.exports = router;