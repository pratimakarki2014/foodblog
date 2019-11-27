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

module.exports.addMenu = function(menu, callback){
    Menu.create(menu, callback);
}

module.exports.getMenuById = function(id, callback){
    Menu.findById(id, callback);
}

module.exports.updateMenu = function(query, update, options, callback){
   Menu.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeMenu = function(query, callback){
    Menu.remove(query, callback);
}