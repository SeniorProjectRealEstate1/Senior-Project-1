// this file handle all database operations for the user table 
const connection = require('./index')

module.exports = {
    getUserByEmail: function (email, callback) {
        const sql = `SELECT * FROM users WHERE email = ?`;
        connection.query(sql, email, function (err, results) {
            callback(err, results)
        })
    },

    getUserByName: function (name, callback) {
        const sql = `SELECT * FROM users WHERE username = ?`;
        connection.query(sql, name, function (err, results) {
            callback(err, results)
        })
    },
    getAll: function (callback) {
        const sql = `SELECT * FROM users `;
        connection.query(sql, function (err, results) {
            callback(err, results)
        })
    },
    createUser: function (body,callback) {
        const sql = `INSERT INTO users SET ?`
        connection.query(sql, body,function(err,results){
            callback(err,results)
        })
    }

}
