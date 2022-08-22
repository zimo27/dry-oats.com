// app.js file

var jsonServer = require('/usr/local/lib/node_modules/json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
// server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

// Returns an Express router
var router = jsonServer.router('db.json');

server.use(router);

//server.listen(3000);

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb://zimo:Dry0at2@dry-oats.com/api',
		{ useNewUrlParser: true },
		() => console.log('connected to DB')
);
mongoose.Promise = global.Promise;

const sessions = [
	{ id: 1, 
	agent_string: 'ex',
        language: 'eng',
        cookie_en: 'true',
        js_en: 'true',
        image_en: 'true',
        css_en: 'true',
        screen_w: 'screenWidth',
        screen_h: 'screenHeight',
        win_w: 'width',
        win_h: 'height',
        network: 'type'},
];
 
const perfs = [{
	id: 1,
	t_object: 't',
	t_start: 't_start',
	t_end: 't_end',
	total_time: 'total'
},];

const actis = [{
	id: 1,
	button: [],
	scroll_pos: [],
	keyboard: [],
	pages: []
},];

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/static', (req,res)=> {
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	res.send(sessions);
	//res.json(message: 'hello');
});

app.get('/static/:id', (req,res) => {
	//res.get('application/json');
	//res.send("uhhhhhhh");
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	const se = sessions.find(c => c.id === parseInt(req.params.id));
	if (!se) res.status(404).send('bruh wrong id');
	res.send(se);
});

app.post('/static', (req,res)=> {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const ses = {
		id : sessions.length + 1,
		agent_string: req.body.agent_string,
        	language: req.body.language,
        	cookie_en: req.body.cookie_en,
        	js_en: req.body.js_en,
        	image_en: req.body.image_en,
        	css_en: req.body.css_en,
        	screen_w: req.body.screen_w,
        	screen_h: req.body.screen_h,
        	win_w: req.body.win_w,
        	win_h: req.body.win_h,
        	network: req.body.network
	};
	sessions.push(ses);
});

app.put('/static/:id', (req,res)=> {
	const se = sessions.find(c => c.id === parseInt(req.params.id));
                se.agent_string= req.body.agent_string;
                se.language= req.body.language;
                se.cookie_en= req.body.cookie_en;
                se.js_en= req.body.js_en;
                se.image_en= req.body.image_en;
                se.css_en= req.body.css_en;
                se.screen_w= req.body.screen_w;
                se.screen_h= req.body.screen_h;
                se.win_w= req.body.win_w;
                se.win_h= req.body.win_h;
                se.network= req.body.network;
});

app.delete('/static/:id', (req,res) => {
        //res.get('application/json');
        //res.send("uhhhhhhh");
        const se = sessions.find(c => c.id === parseInt(req.params.id));
        if (!se) res.status(404).send('bruh wrong id');
	const index = sessions.indexOf(se);
	sessions.splice(index,1);
        //res.send(se);
});

app.get('/perf', (req,res)=> { 
        res.send(perfs);
});

app.get('/perf/:id', (req,res) => {
        const pe = perfs.find(c => c.id === parseInt(req.params.id));
        if (!pe) res.status(404).send('bruh wrong id');
        res.send(pe);
});

app.post('/perf', (req,res)=> {
        const pes = {
                id : perfs.length + 1,
                t_object : req.body.t_object,
                t_start : req.body.t_start,
		t_end : req.body.t_end,
		total_time : req.body.total_time
        };
        perfs.push(pes);
});

app.put('/perf/:id', (req,res) => {
        const pe = perfs.find(c => c.id === parseInt(req.params.id));
        if (!pe) res.status(404).send('bruh wrong id');
        pe.t_object = req.body.t_object;
	pe.t_start = req.body.t_start;
	pe.t_end = req.body.t_end;
	pe.total_time = req.body.total_time;
});

app.delete('/perf/:id', (req,res) => {
        //res.get('application/json');
        //res.send("uhhhhhhh");
        const pe = perfs.find(c => c.id === parseInt(req.params.id));
        if (!pe) res.status(404).send('bruh wrong id');
        const index = perfs.indexOf(pe);
        perfs.splice(index,1);
        //res.send(se);
});




app.get('/acti', (req,res)=> { 
        res.send(actis);
});

app.get('/acti/:id', (req,res) => {
        const ae = actis.find(c => c.id === parseInt(req.params.id));
        if (!ae) res.status(404).send('bruh wrong id');
        res.send(ae);
});

app.post('/acti', (req,res)=> {
        const aes = {
                id : actis.length + 1,
                button : req.body.button,
                scroll_pos : req.body.scroll_pos,
                keyboard : req.body.keyboard,
                button : req.body.button
        };
        actis.push(aes);
});

app.put('/acti/:id', (req,res) => {
        const ae = actis.find(c => c.id === parseInt(req.params.id));
        if (!ae) res.status(404).send('bruh wrong id');
        ae.button = req.body.button;
        ae.scroll_pos = req.body.scroll_pos;
        ae.keyboard = req.body.keyboard;
        ae.button = req.body.button; 
});

app.delete('/acti/:id', (req,res) => {
        const ae = actis.find(c => c.id === parseInt(req.params.id));
        if (!ae) res.status(404).send('bruh wrong id');
        const index = actis.indexOf(ae);
        actis.splice(index,1);
        //res.send(se);
});


app.listen(3000);
