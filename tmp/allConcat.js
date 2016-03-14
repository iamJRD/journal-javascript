var wordCount = require("./../js/wordCount.js").wordCount;
var moment = require('moment');

$(document).ready(function(){
  $('#journal_entry').submit(function(event){
    event.preventDefault();
    var entry_title = $('#entry_title').val();
    var entry_date = $('#entry_date').val();
    var date = moment(entry_date).format("MMM Do YY");
    var entry_body = $('#entry_body').val();
    var count = wordCount(entry_body);
      $('#output').prepend("<h1>" + entry_title + "</h1><p>Date:" + date + "</p><br><p>entry:" + entry_body + "</p><br><p>word count:" + count + "</p>");
  });
});
