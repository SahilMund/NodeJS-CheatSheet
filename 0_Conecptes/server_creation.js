/*localhost:3000   */


const ex = require("express");
const app = ex();
const port = 3000;
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/users", (req, res) => {
    res.send("hello world sahil mund");
});

app.get("/users/pro", (req, res) => {
    res.send("hello ");
});

app.listen(port, () => console.log("server running on port 3000....."));