var express = require('express');
var app = express();

var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.get('/courses', function(request, response){
    fs.readFile('courses.json', 'utf8', function(err, data){
       
        var courses = JSON.parse(data);
        response.locals = {courses: courses};
        response.render('courses.ejs');
    });
});

app.get('/contact', function(request, response){
    response.sendFile(__dirname + '/contact.html');
});
app.listen(8000);


