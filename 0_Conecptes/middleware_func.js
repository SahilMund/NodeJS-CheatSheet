const express = require("express");
const app = express();
const port = 3000;
//app.use(express.static('static_files'));

/*defining middleware function */
var user_midware = function(req, resp, next) {

    console.log("middleware accessed by..." + req.params.username);
    if (req.params.username == 'sahil')
        console.log('User Validate');
    else
        console.log('U r not allowedto acces this');

    next();
}

var sahil_midware = function(req, resp, next) {
    console.log("middleware access...");
    next();
}

/* using middleware function as globally */
//app.use(<midware-function name>);

//using middllware function as locally i.e. for only one function
//1.
app.get("/users/:username", user_midware, (req, res) => {
    res.send("users accessed");
});

//2.
app.get("/sahil", sahil_midware, (req, res) => {
    res.send("My page");
});

//with out miidelware-function
app.get("/users", (req, res) => {
    res.send("hello world sahil mund");
});

app.listen(port, () => console.log("server running on port 3000....."));