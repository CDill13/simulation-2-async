const chalk = require("chalk");
let cChalk = chalk.cyan;

module.exports = {
    createUser: (req, res) => {
        const dbInstance = req.app.get("db");
        const {username, password} = req.body;
        console.log(cChalk(req.session));

        dbInstance.auth.create_user([username, password])
        .then(response => {
            req.session.user = response[0];
            res.status(200).send(response);
        })
        .catch(err => console.log(cChalk(err)));
    },
    login: (req, res) => {
        const dbInstance = req.app.get("db");
        const {username, password} = req.body;
        console.log(cChalk(req.session));

        console.log(cChalk(`login: username:${req.body.username} password:${req.body.password}`));
        dbInstance.auth.get_user([username, password])
        .then(response => {
            console.log(cChalk(`taco`,response[0]))
            req.session.user = response[0].username;
            res.status(200).send(response);
        })
        .catch(err => console.log(cChalk(err)));
    },
    checkUsername: (req, res) => {
        const dbInstance = req.app.get("db");
        const {username} = req.body;
        dbInstance.auth.find_username([username])
        .then(response => {
            res.status(200).send(response)
        })
    },
    isUserOnSession: (req, res) => {
        console.log(`user:`, req.session);
        res.status(200).send(req.session)
    },
    logout: (req, res) => {
        console.log(cChalk(`logout ${req.session}`));
        req.session.destroy();
        console.log(cChalk( req.session));
        res.status(200).send(req.session);
    }

}

// registerUser: (req, res) => {
//     let db = req.app.get("db");
//     let { username, password } = req.body;
  
//     db
//       .create_user([username, password])
//       .then(result => {
//         req.session.user = result[0];
//         req.session.user.id = result[0].id;
//         res.status(200).send();
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).send();
//       });
//   },
 
//   loginUser: (req, res) => {
//     let db = req.app.get("db");
//     console.log(req.session, "login endpoint hit");
 
//     let { username, password } = req.body;
 
//     console.log(req.body);
//     db
//       .find_user([username, password])
//       .then(result => {
//         req.session.user = result[0];
//         req.session.user.id = result[0].id;
//         res.status(200).send(result);
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).send("Please Register");
//       });
//   }