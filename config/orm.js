var connection = require("../config/connection.js");

var orm = {
    
    selectAll: function (bk) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            bk(result);
        });
    },

    insertOne: function (burger, bk) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      connection.query(queryString, [burger], function (err, result) {
          if (err) throw err;
          bk(result);
      });
  },
  

  updateOne: function( id, bk) {
    var queryString = "UPDATE burgers SET devoured = 1 where id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }
      bk(result);
    });
  }
};

module.exports = orm;