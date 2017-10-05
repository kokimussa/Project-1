var myAPI = "616f4815b47dbe302165b78598598d02";
var targetURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
var queryURL = targetURL + myAPI + "&language=en-US&page=1";
var posterBaseURL = "https://image.tmdb.org/t/p/w342"; //poster size is w342
$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function(movieData){
  console.log(movieData);
  var movieResult = movieData.results;
  for(var i = 0; i < 10; i++){
      var movieDiv = $("<div>");

      // Creating a paragraph tag with the movie's title
      var pTitle = $("<p>").text(movieResult[i].title);

      // Creating a paragraph tag with the movie's overview
      var pOverview = $("<p>").text(movieResult[i].overview);

      // Creating a image tag with the movie's poster
      var posterEndURL = posterBaseURL + movieResult[i].poster_path;

      var posterImage = $("<img>");
      posterImage.attr("src", posterEndURL);

      movieDiv.append(i+1);
      movieDiv.append(pTitle);
      movieDiv.append(pOverview);
      movieDiv.append(posterImage);

      $("#movies-appear-hear").append(movieDiv);
  }

})

//https://api.themoviedb.org/3/movie/now_playing?api_key=616f4815b47dbe302165b78598598d02&language=en-US&page=1/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg