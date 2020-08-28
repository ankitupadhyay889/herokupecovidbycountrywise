const express = require("express");
const exhbs = require("express-handlebars");
const api = require('novelcovid');
 
// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh'
})

// api.countries().then(console.log) 
// api.countries({country:'india'}).then(console.log) 
// api.gov('india').then(console.log);

const app = express();

app.set('view engine', 'hbs');

app.engine('hbs' , exhbs( {
    extname: 'hbs' ,
    defaultView: 'home' ,
    layoutsDir: __dirname + '/views/layouts/'
}));

app.get('/' , (req,res) => {
    api.countries().then((response) => {
        res.render('home' , {info:response});
    })
})

app.listen(4000 , ()=>{
    console.log(`Server chla hai port 4000 pe`);
})