require("dotenv").config();
const express = require("express");
const chalk = require("chalk");
const massive = require("massive");
const bodyParser = require("body-parser");
const axios = require("axios");
const ctrlr = require("./Controller")

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

const app = express();
app.use(bodyParser.json());
let sChalk = chalk.blue;

massive(process.env.CONNECTION_STRING).then(
    db => {
        app.set("db", db)
        console.log(sChalk(`MASSIVE DEMON LISTENS`))
    }
)

app.post(`/api/create_user`, ctrlr.createUser)

let port = SERVER_PORT;
app.listen(port, () => {
    console.log(chalk.green(`serverPort=${port}`))
    console.log(sChalk(`NODE DEMON SPEAKS`))
})