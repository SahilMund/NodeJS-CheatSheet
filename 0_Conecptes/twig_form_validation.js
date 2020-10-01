//used with index.pug in static files/views/index.twig
//  login_form.twig  n lofin_post.twig
//it is not workingp properly

const express = require("express");
//for  post method we have to acquire body-parser
var bodyParser = require("body-parser");

const app = express();
const port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
//app.use(bodyParser.json())


app.set('view engine', 'twig');
app.set('views', './static_files/views');

app.get('/', (req, res) => {


    res.render('login_form', {

        title: "login here....",
        msg: "Enter ur username and password",
    });


});

app.post("/login", (req, res) => {
    username = req.body.username
    password = req.body.password
    res.render('login_post', { name, password })
});



app.listen(port, () => console.log("server running on port 3000....."));