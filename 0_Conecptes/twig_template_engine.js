//used with index.pug in static files/views/index.twig
//  login_form.twig  n lofin_post.twig

const express = require("express");


const app = express();
const port = 7000;



app.use(express.static('static_files')); //for importing static files
app.set('view engine', 'twig');
app.set('views', './static_files/views');

app.get("/engine_twig", (req, res) => {
    //as we use engine instead  of send we  write render
    res.render('index', { title: "tutorials website", msg: "hello world" })
});

app.get('/calculator/:a-:b/', (req, res) => {
    res.render('index', {
        title: 'calculator-the evaluater',
        msg: 'here is some opeartion done......',

        sum: "addition is is: " + (parseInt(req.params.a) + parseInt(req.params.b)),
        subs: "substraction  is: " + (parseInt(req.params.a) - parseInt(req.params.b)),
        mul: "multiplication is: " + (parseInt(req.params.a) * parseInt(req.params.b)),
    })

});

app.listen(port, () => console.log("server running on port 7000....."));