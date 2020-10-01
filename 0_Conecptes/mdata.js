/*      Inserting to mongoDB    */
//mongodb+srv://emp_db:emp_db123@cluster0-j3zm9.mongodb.net/test
//mongodb://localhost:27017/employee
var mongoose = require('mongoose');
//Defining your schema

mongoose.connect('mongodb://localhost:27017/employee', { useNewUrlParser: true, useUnifiedTopology: true });

//connection object
var conn = mongoose.connection;


var Schema = mongoose.Schema;

var empSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    email: String,
    emptype: String,
    hourlyrate: Number,
    totalHour: Number,
    total: Number
});

//a method for tot salary
empSchema.methods.totSalary = function() {
    console.log("Total income of %s :Rs. %dK", this.name, this.hourlyrate * this.totalHour);
    return this.hourlyrate * this.totalHour;

}

//Creating a model
var empmodel = mongoose.model('Emp', empSchema);

var emp = new empmodel({
    name: 'Sahil',
    email: 'msahilranjan01@gmail.com',
    emptype: 'hourly',
    hourlyrate: 10,
    totalHour: 16,
});
//console.log(emp);
emp.total = emp.totSalary();

conn.on("connected", () => {
    console.log("connected succesfully........");
});

conn.on("disconnected", () => {
    console.log("disconnected succesfully.........");
});

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {

    /* emp.save((err, res) => {
        if (err) throw error;
        console.log(res);
        conn.close();
    });  */ //insert query

    /*  // fetch query
    empmodel.find({}, (err, data) => {
        if (err) throw error;
        console.log(data);
        conn.close();
    });  */

    // updating query
    empmodel.findOneAndUpdate({ 'totalHour': 89 }, { 'total': 80 * 10 }, (err, data) => {
        if (err) throw error;
        console.log(data);
        conn.close();
    });
});