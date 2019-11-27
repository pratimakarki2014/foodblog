const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: {
        type: String
    },
    venue: {
        type: String
    },
    body: {
        type: String
    },
    created_at: {
        type: Date,
        default:Date.now
    },
});

const Event = module.exports = mongoose.model('Event', eventSchema);

module.exports.getMenus = function(callback, limit){
    menu.find(callback).limit(limit).sort([['title', 'ascending']]);
}

module.exports.addMenu = function(menu, callback){
    menu.create(menu, callback);
}

module.exports.getMenuById = function(id, callback){
    menu.findById(id, callback);
}

module.exports.updateMenu = function(query, update, options, callback){
    menu.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeMenu = function(query, callback){
    menu.remove(query, callback);
}