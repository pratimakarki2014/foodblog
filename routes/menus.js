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

router.post('/add', (req, res) => {
    let menu = new Menu();
    menu.title = req.body.title;
    menu.description = req.body.description;
    menu.ingredients = req.body.ingredients;

    Menu.addMenu(menu, (err) => {
       if(err){
           res.send(err);
       }
       res.redirect('/manage/menus');
    });
});

router.post('/edit/:id', (req, res) => {
    let menu = new Menu();
    const query = {_id: req.params.id}
    const update = {title: req.body.title, description: req.body.description, ingredients: req.body.ingredients}

    Menu.updateMenu(query, update, {}, (err) => {
        if(err){
            res.send(err);
        }
        res.redirect('/manage/menus');
    });
});

router.delete('/delete/:id', (req, res) => {
    const query = {_id: req.params.id}

    Menu.removeMenu(query, (err) => {
        if(err){
            res.send(err);
        }
        res.status(200);
    });
});

module.exports = router;