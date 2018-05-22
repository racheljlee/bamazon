var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    start();
});

function start() {
    inquirer.prompt([
        {
            name: "id",
            message: "What is the ID of the product you'd like to purchase?",
        },
        {
            name: "units",
            message: "How many units of the product would you like to purchase?"
        }
    ]).then
}