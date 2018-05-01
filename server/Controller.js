const chalk = require("chalk");
let cChalk = chalk.cyan;

module.exports = {
    createUser: (req, res) => {
        const dbInstance = req.app.get("db");
        const {username, password} = req.body
        console.log(cChalk(`create user hit`, req.body))
        dbInstance.create_user([username, password])
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => console.log(cChalk(err)))
    }
}