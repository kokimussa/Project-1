var myAPI = "616f4815b47dbe302165b78598598d02";
var targetURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
var queryURL = targetURL + myAPI + "&language=en-US&page=1";
$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function(movieData){
  console.log(movieData);
  var movieResult = movieData.results;
  for(var i = 0; i < movieResult.length; i++){

  }

})

https://api.themoviedb.org/3/movie/now_playing?api_key=616f4815b47dbe302165b78598598d02&language=en-US&page=1/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg