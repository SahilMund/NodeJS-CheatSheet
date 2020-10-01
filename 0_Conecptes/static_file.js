/*localhost:3000   */


const express = require("express");
const app = express();
const port = 5000;
app.use(express.static('static_files'));
app.get("/pix", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/users", (req, res) => {
    res.send("hello world sahil mund");
});



app.listen(port, () => console.log("server running on port 5000....."));