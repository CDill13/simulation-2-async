const chalk = require("chalk");
let seChalk = chalk.magenta;

module.exports = function(req, res, next){
    if (!req.session.user) {
        console.log(seChalk("creating new session"));
        req.session.user = {
            username1: "",
            loggedIn1: false
        };
    }
    next();
};