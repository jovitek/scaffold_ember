var mongoose  = require('mongoose');

var express = require('express');

var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser());

// Change this to your Mongo URI
mongoose.connect('mongodb://admin:admin@ds049858.mongolab.com:49858/mydb');

var UserModel = mongoose.Schema({
	username: String,
	password: String,
	created: {type: String, default: Date.now }

});


var Model = mongoose.Schema({
	name: String,
	amount: { type: Number, default: 0 }
});

// Note I changed the name of the product collection
var Product = mongoose.model('product', Model);

var User = mongoose.model('user', UserModel);

// Creates a new record using the Product model
var product = new Product({
	name: "Patrick"
});

product.save({name: "Something"}, function(err, doc){
	console.log(doc);
});

// Finds the created record above and updates the amount. 
Product.update({name: "Patrick"}, { amount: 100}, function (err, response){
	console.log('Updated');
});

// Finds all of the records in the product collection. 
Product.find({}, function(err, docs){
	console.log(docs);
});

app.get('/', function(req, res){
	console.log('home loaded');
	Product.find({}, function(err, docs){
		res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.send(docs);
	});
});

app.post('/', function(req, res){

	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

	console.log(req.body);
	var user = new User ({
		username: req.body.username,
		password: req.body.password
	});

	user.save( function(err, doc) {
		console.log(doc);
		res.send(doc);
	});
});

app.post('/natural', function(req, res){

	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.send(req.body.natural);
	
	
});

app.post('/search', function(req, res){

	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

	console.log(req.body);

	User.findOne({ username: req.body.query }, function(err, doc){

		if(doc) {
    	res.send(doc);
    	} else {
    	res.send({ _id: "User not found" } );
    	}

	});

});



app.listen(80);
