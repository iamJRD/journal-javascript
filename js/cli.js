var wordCount = require('./wordCount.js').wordCount;
var prompt = require('prompt');
prompt.start();

prompt.get('entry_body', function(err, test) {
var test = wordCount(test.entry_body);
console.log(test);
});
