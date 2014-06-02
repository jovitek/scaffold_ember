var natural = require('natural');



tokenizer = new natural.WordTokenizer();
var words = tokenizer.tokenize("your dog has flees.");

var firstWord = "frog";
var secondWord = "dog"


  
var jw = natural.JaroWinklerDistance(firstWord,secondWord);

var ld = natural.LevenshteinDistance(firstWord,secondWord);

var divide = ld/jw;
	

classifier = new natural.BayesClassifier();

classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('buy the qs', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();

console.log(classifier.classify('i am short silver'));

console.log (divide);
console.log (jw,ld);