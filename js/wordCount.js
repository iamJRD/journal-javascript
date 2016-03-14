exports.wordCount = function(entry_body){
  var count = 0;
  var string = entry_body.split(" ");
  for(var i=1; i <= string.length; i++){
    count ++;
  }
  return count;
};
