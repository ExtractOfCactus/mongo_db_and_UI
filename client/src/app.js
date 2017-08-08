var ReviewView = require('./views/reviewView');

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;

  var reviewString = this.responseText;
  var reviews = JSON.parse(reviewString);
  var reviewView = new ReviewView(reviews);
}

var app = function(){
  var url = "http://localhost:3000/reviews"
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);