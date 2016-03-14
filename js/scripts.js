$(document).ready(function(){
  $('#journal_entry').submit(function(event){
    event.preventDefault();
    var entry_title = $('#entry_title').val();
    var entry_date = $('#entry_date').val();
    var entry_body = $('#entry_body').val();
    var count = wordCount(entry_body);
      $('#output').prepend("<h1>" + entry_title + "</h1><p>Date:" + entry_date + "</p><br><p>entry:" + entry_body + "</p><br><p>word count:" + count + "</p>");
    });
  });
