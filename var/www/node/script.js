var express    = require('express');
var cors 	   = require('cors')
var app        = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var cred 	   = require('./bdd.js');
var connection = mysql.createConnection(cred);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
var port = process.env.PORT || 8080;

app.get('/vue',function (req,res) {
	connection.query("UPDATE vue SET nb_vue = nb_vue+1 WHERE vue.id = 1;",function (error, results, fields) {
		try{
		}catch(e){
		}
	})

	connection.query("SELECT * FROM vue",function (error, results, fields) {
		try{
			console.log(results);
			res.json({data:results[0]});
		}catch(e){

		}
	})
});





// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
