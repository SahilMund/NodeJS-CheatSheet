/*localhost:3000   */


const express = require("express");
const app = express();
const port = 3000;

/* routing with parametrs (i.e. comulsory parameters)*/
app.get("/users/:id/book/:book_id", (req, res) => {
    res.send("User Data accessed " + req.params.id + " book id:" + req.params.book_id);
});

/* routing with optional parametrs */
app.get("/users/:id?", (req, res) => {

    if (req.params.id == undefined)
        res.send("all users data accessed");
    else
        res.send("User Data accessed " + req.params.id);

});

/* routing with parametrs and - operator*/

app.get("/flights/:from-:to", (req, res) => {
    res.send("Search for flights " + " from : " + req.params.from + " to : " + req.params.to);
});

/* routing with parametrs and . operator*/
app.get("/trip/:from.:to", (req, res) => {
    res.send("Search for flights " + " from : " + req.params.from + " to : " + req.params.to);
});

/* ...........................using route parametrs with slash  characters ...........................*/

/*use of ? mark */
app.get("/ab?cd", (req, res) => { //accsible : acd,abcd
    res.send("hello world sahil mund");
});

/*use of + mark */
app.get("/ab+cd", (req, res) => { //accsible : abcd,abbcd,abbbbbbcd.... i.e.b can be many times but a,c,d only 1 times
    res.send("executed succesfully.......");
});
/*use of * mark */
app.get("/ab*cd", (req, res) => { //accsible : in between 'ab' and 'cd' we can write anything i.e ab125478cd
    res.send("executed at " + req.params[0]); //it will print the value that we gave their

});
/* use of $ */
app.get(/.*fly$/, (req, res) => { //accsible : last letter must be fly e.g butterfly etc
    res.send("it is accessible");
});

app.listen(port, () => console.log("server running on port 3000....."));