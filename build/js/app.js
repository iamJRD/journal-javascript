(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
