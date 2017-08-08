var ReviewView = function(reviews){
  this.render(reviews);
}

ReviewView.prototype = {
  render: function(reviews){
    
    console.log(reviews);
    reviews.forEach( function(review){
      var liName = document.createElement('li');
      var liTitle = document.createElement('li');
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('reviews');
      liName.innerText = review.name;
      liTitle.innerText = review.title;
      text.innerText = review.review;
      li.appendChild(text);
      ul.appendChild(liName);
      ul.appendChild(liTitle);
      ul.appendChild(li);
    });
  }
}

 module.exports = ReviewView;