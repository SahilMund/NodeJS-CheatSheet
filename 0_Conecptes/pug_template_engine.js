//used with index.pug in static files/views/index.pug

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('static_files'));
app.set('view engine', 'pug');
app.set('views', './static_files/views');

app.get("/engine_pug", (req, res) => {
    //as we use engine instead  of send we  write render
    res.render('index', { title: "tutorials website", msg: "hello world" });
});
app.listen(port, () => console.log("server running on port 3000....."));