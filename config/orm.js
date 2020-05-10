// Import MySQL connection.
var connection = require("../config/connection.js");

//SQL syntax function to put in question marks for safety to fend off insertion malware ex: ; Drop table;
function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num.length; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//Export the orm object 
module.exports = orm;