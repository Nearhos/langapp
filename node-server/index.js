require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const axios = require('axios');
// var con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to mysql!");
// });

app.get('/', (req, res) => {
  res.send(process.env.OPENAI_API);
});

// receive message
app.post('/sendmessage', jsonParser, (req, res) => {
    const message = req.body.message;
    if (!message) {
        res.send({message: "Need to include message body"});
        return;
    }

    let config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API}`
        }
    }

    axios
    .post('https://api.openai.com/v1/completions', {
        model: "text-ada-001",
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }, config)
    .then(response => {
        console.log(response.data);
        let replyWith = response.data?.choices[0]?.text;
        if (!replyWith) {
            replyWith = "An error occured";
        }
        res.send({message: replyWith});
        return;
    })
    .catch(error => {
        console.error(error);
        res.send("An error occurred.");
        return;
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});