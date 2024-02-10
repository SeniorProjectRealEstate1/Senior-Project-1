// this file handle the server functionality for auth 
const jwt = require('jsonwebtoken')
const user = require('../database/users');
const bcrypt = require('bcrypt')// used to hash password
const crypto = require('crypto');// used to generate secure string utile to generate a secret key 


// helper function to validate password strength using regular expressions
function validatePassword(password) {
    // regular expression to match the password criteria
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;// this used to see if the password have at least one digit have lower and  upper case letter char and length=8
    return regex.test(password);// .test return true if password respect the regex and false if not
}


// function to see if the email exit in our database get user how have this email used to never allow an email to have to accont
module.exports.getUserEmail = async (req, res) => {
    await user.getUserByEmail(req.body.email, function (err, results) {
        if (err) { res.json(err) }
        else { res.json(results) }
    })
}
// function to see if the username exit in our database get user how have this username
module.exports.getUserByname = async (req, res) => {
    await user.getUserByName(req.body.username, function (err, results) {
        if (err) { res.json(err) }
        else { res.json(results) }
    })
}
// function to create user in our database will be used in the sign up
module.exports.registerUser = async (req, res) => {
    await user.getUserByEmail(req.body.email, function (err, results) {
        if (err) { res.status(500).json(err) }
        else if (results.length > 0) { res.json("email used") }
        else if (!validatePassword(req.body.password)) { res.json("password not valid") }
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)//function to hash password
        console.log('hashed password', hashedPassword)
        const newUser = {
            email: req.body.email,
            password: hashedPassword,
            username: req.body.username,
            token: req.body.token
        }// create new user object to use this insted of req.body in createUser function for security reason to never store the actual password in db but the hashedPassword insted 
        user.createUser(newUser, function (err, results) {
            if (err) { res.json(err) }
            else { res.json(results) }
        })

    })

}

// generete a secret key and saved it 
const secretKey = crypto.randomBytes(32).toString('hex')

module.exports.loginIn = async (req, res) => {
    let userResults;
    try {
        userResults = await new Promise((resolve, reject) => {
            user.getUserByEmail(req.body.email, function(err, results) {
                if (err) {
                    console.error("Error:", err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        if (userResults.length === 0) {
            return res.json('Invalid email');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json(error);
    }
    console.log('Outside getUserByEmail:', userResults);
    const isPasswordValid=bcrypt.compareSync(req.body.password,userResults[0].password)
    if(!isPasswordValid){res.status(500).json('Invalid Password')}
    else {
        const token =jwt.sign({email:userResults[0].email,username:userResults[0].username},secretKey,{ expiresIn: '1h' })
        res.json(token)
    }
}










