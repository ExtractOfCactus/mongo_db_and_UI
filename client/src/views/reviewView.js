var ReviewView = function(reviews){
  this.render(reviews);
}

ReviewView.prototype = {
  render: function(reviews){
    
    console.log(reviews);
    reviews.forEach( function(review){
      var ul = document.createElement('ul');
      ul.classList.add("reviews");
      var div = document.querySelector(".list-container");

      var liName = document.createElement('li');
      var liTitle = document.createElement('li');
      var li = document.createElement('li');
      var text = document.createElement('p');
      
      liName.innerText = review.name;
      liTitle.innerText = review.title;
      text.innerText = review.review;
      li.appendChild(text);
      ul.appendChild(liName);
      ul.appendChild(liTitle);
      ul.appendChild(li);
      div.appendChild(ul);
    });
  }
}

 module.exports = ReviewView;