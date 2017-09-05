var express    = require('express');
var cors 	   = require('cors')
var app        = express();
var mongoClient = require("mongodb").MongoClient;
var bodyParser = require('body-parser');

var nb = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
var port = process.env.PORT || 8080;

app.post('/vue', function (req, res) {
	console.log("vue");
});

app.get('/vue',function (req,res) {
	console.log("vue");
    nb = nb+1;
    res.json(nb);
});





// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
