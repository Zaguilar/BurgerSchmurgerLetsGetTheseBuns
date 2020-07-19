var orm = require ("../config/orm.js")

//orm functions called
var burger = {
    selectAll: function (bk) {
        orm.selectAll(function (res) {
            bk(res);
        });
    },
    insertOne: function (burger, bk) {
        orm.insertOne(burger, function (res) {
            bk(res);
        });
    },
    updateOne: function (id, bk) {
        orm.updateOne([id], function (res) {
            bk(res);
        });
    },
    
};
//export burger.js file
module.exports = burger;