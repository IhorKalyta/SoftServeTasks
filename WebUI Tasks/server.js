const express = require('express')
var port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const cons = require('consolidate');
const path = require('path');

const Fans = require('./models/Fans');
const News = require('./models/News');

mongoose.connect('mongodb://localhost:27017/karpaty', {useNewUrlParser: true});

const app = express();

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/fans', async (req, res) => {
     const appeal = await Fans.find();
     res.json(appeal);
 });
app.post('/fans', async (req, res) => {
     const appeal = await Fans.create(req.body);
     res.json(appeal);
});

app.delete('/fans', async () => {
     await Fans.remove({});     
});

app.get('/news', async (req, res) => {
     const news = await News.find();
     res.json(news);
});

app.post('/news', async (req) => {
     await News.create(req.body);
});

app.delete('/news', async () => {
     await News.remove({});
});

app.listen(port, function () {
     console.log("Running Karpaty.com on port " + port);
});
