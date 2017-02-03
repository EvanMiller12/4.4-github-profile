
var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');
var moment = require('moment');
//send off token to github if token is provided
if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
    }
  });
}

var userNameUrl = 'https://api.github.com/users/EvanMiller12';

$.ajax(userNameUrl).done(function(data){
  // console.log(data);
  var source = $('#userinfo-template').html();
  var template = Handlebars.compile(source);
  $('.user-info').append(template(data));
});

var userRepoUrl = 'https://api.github.com/users/EvanMiller12/repos';

$.ajax(userRepoUrl).done(function(repos){
  var source = $('#repos-template').html();
  var template = Handlebars.compile(source);

  var orderDate = _.sortBy(repos, 'updated_at').reverse();
    orderDate.forEach(function(data){
  // console.log(data);
  var getDate = moment(data.updated_at, "YYYYMMDD").fromNow();
    data.getDate = getDate;
    $('.repo-temp-insert').append(template(data));
  });
});
