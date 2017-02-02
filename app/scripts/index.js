
var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');

var source = $('#repositories-template').html();
var template = handlebars.compile(source);
console.log(source);

fetchJSONP(githubtoken, function(data){
  console.log(data);

//send off token to github if token is provided
if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token' + githubtoken.token;
    }
  });
}
});
