var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/"));
app.use(bodyParser.text({ extended: false }));

// передача файлов на сайт
app.get('/', function(req, res){
	res.send()
})

// прием данных с сервера
app.post('/', function(req, res){
	
	// создание json файла с принятыми данными
	fs.writeFile("jsonsource/jsonReq/new.json", req.body, function(err) {  
		if (err) throw err;
	});

	// чтение и переименовывание созданного new.json в \"inn"\.json
	fs.readFile('jsonsource/jsonReq/new.json', 'utf8', function(err, contents) {
		if (err) throw err;

		// переименовывание файла
		fs.rename("jsonsource/jsonReq/new.json", "jsonsource/jsonReq/" + JSON.parse(contents)[0].value + ".json", function(err) {  
			if (err) throw err;  
		});
	});

	res.send("")
})

// ... и повиновение сервера
app.listen(8080, function(){
	console.log('Hola!');
})
