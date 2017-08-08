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
      var h2 = document.createElement("h2");
      var li = document.createElement('li');
      var text = document.createElement('p');

      h2.innerText = review.title;
      liName.innerText = review.name;
      text.innerText = review.review;

      li.appendChild(text);
      ul.appendChild(h2);
      ul.appendChild(liName);
      ul.appendChild(li);
      div.appendChild(ul);
    });
  }
}

 module.exports = ReviewView;