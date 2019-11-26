const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
   title: {
       type: String
   },
    description: {
       type: String
    },
    ingredients: {
       type: String
    }
});

const Menu = module.exports = mongoose.model('Menu', menuSchema);

module.exports.getMenus = function(callback, limit){
    Menu.find(callback).limit(limit).sort([['title', 'ascending']]);
}