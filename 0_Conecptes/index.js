//it is working with show.ejs and i.ejs in view folder


const express = require("express");
var bodyParser = require('body-parser')
const app = express();

// ...rest of the initial code omitted for simplicity.  (for express-validator)
const { check, validationResult } = require('express-validator');


app.set('views', './static_files/views');

const jsonParser = bodyParser.json()
const urlencoderParser = bodyParser.urlencoded({
    extended: true
})

app.get("/", (req, res) => {
    console.log(req.body)
    res.render('i.ejs')
});

app.post("/login", urlencoderParser, (req, res) => {
    name = req.body.username
    password = req.body.password
    res.render('show.ejs', { name, password })
});

app.post("/", urlencoderParser, [check('username', 'Invalid username').isEmail(),
        check('password', 'Password must be in 5 characters').isLength({ min: 5 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        console.log(errors.mapped());

        res.render('i.ejs', { error: errors.mapped() });


    });

app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server running at port 5000"));


/*
//app.get("/login", (req, res) => {
  username = req.body.username
  password = req.body.password
  console.log('2');
  res.render('login_post', {
      title: 'User details',
      msg: "your details here",
      username,
      password
  });
  console.log(req.body)
  console.log(req.body.username)
  console.log(req.body.password)


  */