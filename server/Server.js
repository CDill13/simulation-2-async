require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const massive = require("massive");
const bodyParser = require("body-parser");
const axios = require("axios");
const session = require("express-session");
let sChalk = chalk.blue;
let seChalk = chalk.magenta;
const ctrlr = require("./Controller");
// const keydown = require("react-keydown");
// const checkForSession = require("./middleware/checkForSession");

const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../build"));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 36000000}
}))
/*
app.use(checkForSession , console.log(seChalk("session", session)) );
*/
massive(process.env.CONNECTION_STRING).then(
    db => {
        app.set("db", db)
        console.log(sChalk(`MASSIVE DEMON LISTENS`))
    }
)

app.post(`/api/check_username`, ctrlr.checkUsername)
app.post(`/api/create_user`, ctrlr.createUser);
app.post(`/api/login`, ctrlr.login);
app.get(`/api/isUserOnSession`, ctrlr.isUserOnSession);
app.delete(`/api/logout`, ctrlr.logout);
app.post(`/api/saveNewProperty`, ctrlr.saveNewProperty);
app.post(`/api/getUserProperties`, ctrlr.getUserProperties);
app.delete(`/api/deleteProperty/:id`, ctrlr.deleteProperty)

let port = SERVER_PORT;
app.listen(port, () => {
    console.log(chalk.green(`serverPort=${port}`))
    console.log(sChalk(`NODE DEMON SPEAKS`))
})