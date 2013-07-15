var 	express = require('express')
	,	app = express()
	,	server = require('http').createServer(app)
	,	fs = require('fs')
	,	path = require('path')
	,	repl = require('repl')


server.listen(3000);
app.use(express.static(path.join(__dirname, '/')));
app.get('/index.html', function(req, res){
	res.sendfile('index.html');
});


repl.start({
	prompt: "Option Chain: ",
	input: process.stdin,
	output: process.stdout,
	useGlobal: true
});