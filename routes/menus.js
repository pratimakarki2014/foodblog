const express= require('express');
const router = express.Router();

Menu = require('../models/menu.js');

router.get('/', (req, res, next) => {

        res.render('menus', {
            title: 'Menus'
        });
});

module.exports = router;