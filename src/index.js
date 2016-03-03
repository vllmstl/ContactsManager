var express = require('express');
var cm = express();
var path = require('path');
// var handlebars = require('handlebars');


var port = 3000;

// cm.use("view engine", 'html');
cm.use("/public", express.static("public"));

cm.get('/', function (req, res) {
	// console.log("A request was made.");
	console.log(path.join(__dirname + '/../public/html/index.html'));
	res.sendFile(path.join(__dirname + "/../public/html/index.html"));
});


cm.listen(port, function (err) {
	if (err) {
		console.log("Failed to start the server.");
	} else {
		console.log("Running at http://localhost:" + port);
	}
});