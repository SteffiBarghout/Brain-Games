var orm = require("../config/orm.js");

var puzzles = {
    insertAll: function(cb) {
        orm.insertAll("puzzles", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.InsertOne("puzzles", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("puzzles", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller.
module.exports = puzzles;