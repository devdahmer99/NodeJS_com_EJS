const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', function (req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
         },
         {
             title: "E",
             message: "screver códigos de uma maneira mais rápida e fácil"
         },
         {
             title: "M",
             message: "anusear com diversas features do Javascript"
         },
         {
             title: "A",
             message: "mor por desenvolver em Javascript"
         },
         {
             title: "I",
             message: "ndex.js"
         },
         {
             title: "S",
             message: "ource.js || Source Code Script"
         }  
    ];
    const subtitle = "Linguagem de Modelagem para Criação de páginas HTML utilizando Javascript"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', function(req, res){
    res.render("pages/about");
})

app.listen(port);
console.log('Server is running at port: '+port);