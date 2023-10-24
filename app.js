const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURI = '';
//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//.then((result) => console.log('connected to db'))
//.catch((err) => console.log(err))

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));

app.get('/', (req,res) => {
    const blurbs = [
        {title: 'Lorem ipsum dolor sit amet.', snippet: 'Aut amet quibusdam est beatae exercitationem non officia.'},
        {title: 'Lorem ipsum dolor sit amet.', snippet: 'Aut amet quibusdam est beatae exercitationem non officia.'},
        {title: 'Lorem ipsum dolor sit amet.', snippet: 'Aut amet quibusdam est beatae exercitationem non officia.'}
    ];

    res.render('index', { title: 'Home', blurbs });
});

app.get('/about', (req,res) => {
    res.render('about', { title: 'About' });
});

app.get('/blurbs/create', (req,res) => {
    res.render('create', { title: 'Create a new blurb'});
});

app.use((req,res) => {
    res.status(404).render('404', { title: '404'});
});