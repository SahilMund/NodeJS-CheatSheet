//! 1.  named function vs anonymous function vs arrow function

// normal named function
function person() {
    console.log("hyy")
}

//  annonymous function
var person = function() {
    console.log("hello world !!");
}

// arraow function
var person = () => console.log("hello world  babe!!");

person()

//! 2. require vs import

//! 3.  module.exports vs export default

//! 4. let vs const vs var
let a = "we can not declare let multiple times";
var b = "we can  declare var multiple times";
const c = "it can not be changed or overiiden , but when a object is defined using const \
            the it can be replaced"


//! 5. what is template strings?
var data = {
    names: "sahil",
    age: 18
}
const { names, age } = data
console.log("Hi %s You are %s years old", names, age)
console.log(`Hi ${names} You are ${age} years old`)

//! 6. what is node js , its features and working principles.why node is called event driven programming lang.


//! 7. what is the advantages of deconstruction {}

//! 8. what is prototype in node js

const prot = "In case of node js we used prototype incase of inheritance  and\
if we want to add new properties at later stage to a function which will be shared across all the instances"


class Users {
    constructor() {
        this.name = "sahil",
            this.email = " abc@gmail.com"
    }
}

Users.prototype.age = 50

var user1 = new Users();
var user2 = new Users();

console.log(user1.name)
console.log(user1.age)

console.log(user2.name)
console.log(user2.age)

//! 9. http modules
const it = "it is used to create a server ,it is a predefined node module"
const http = require('http');
const server = http.createServer(function(req, res) {
    res.write("Node");
    res.write("<h1> Node </h1>");
    res.end();
});
console.log(server)

//! 10 . what listen() function does

//! 11. what does __dirname and __filename does ?

//! 12. file system modules
const it = " to read or write the data from a .txt file"
const fs = require("fs");
//  reading
fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)
});

// deleting

fs.unlink(__dirname + "/hello.txt", (err, data) => {
    if (err) throw err;
    console.log("file deleted successfully")
});

//!  13. differnce between readFile and readFileSync

const it = "readFileSync() is synchronous and blocks execution until finished. These return their results as return values. readFile() are asynchronous and return immediately while they function in the background. You pass a callback function which gets called when they finish.\
 let's take an example for non-blocking"


//! 14. differnce between synchronous and asynchornous function
const async = "which event gives first output , first print that  (here  call back function returns)"
const sync = "step-by-step execution  (here no call back function returns)"


// ! 15. how to create and trigger custom events

const events = require("events");
const e = new events.EventEmitter(); //creating an object
e.on('click1', () => console.log("clicked !!")) //event creation
e.emit('click1'); // firing the event

// ! 16. Use of nodemon

// ! 17. What is npm and yarn 
// ! how nodejs works ?
// lvau - node module (which accesse server)
// event loop - server memory allocation of request
//  non-blocking IO  (multiple requests )

// ! nodejs used :- only io extensive work not for cpu extensive work(i.e. calculation)

// !



// ------------------------------------------// ! Express---------------------------------------------

// ? Express Js

// ! 1. Express JS VS node js
const it = "express js is a js framework used for nodejs but node js is a js run time environment"

// ! 2. Library Vs Framework


//! 3. server creation in express

// ! 4 . template engines with express

const it = " Template engines enables us to use static template files in our applications"
const types = "pug, mustach,ejs,twig"

app.set('view engine', 'pug')

// ! 5.routing in express
const it = " roting means determining how an application respondes to a client request \
 to a particular endpoint"

//  !6. what is postman 
const it = "it is a google extension helps in routes validation checking"

// !7. How to use static files in express
const it = " here we use a built in middleware express.static('folder name')"
const used = "app.use(express.static('folder name')"

// ! 8. what is a middleware and what is app.use()
const mid = " middleware functions are function that have access to the request object ,response object and next object i.e. (req,res,next) \
in the applications request response cycle"

"The next function is a callback argument to the middleware function"


// !9. routes with parameters
const it = "/user/:id , here id is parameter"


// !--------------------------------------------------------------React JS----------------------------------

//? React.js

// ! 1. React Js is a framework or library ?
const ans = "It is a js library not a framework"

// ! 2. what is reatjs ?
"Recat is a js library for building UI's"
/*
? Declarative:
 React makes it painless to create interactive UIs.Design simple views for each state in your application, and React will efficiently update and render 
 just the right components when your data changes. Declarative views make your code more predictable , simpler to understand, and easier to debug."

? Component-Based: 
Build encapsulated components that manage their own state, then compose them to make complex UIs. 
 Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.


?Learn Once, Write Anywhere: 
 We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. 
React can also render on the server using Node and power mobile apps using React Native.
*/

// !
