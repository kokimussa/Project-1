var movies_api = "2B2888AB-A2D4-437C-A0BD-5C58BF0211E3\n";
//var user_search = "";
//var queryURL_v1 = "https://api.amctheatres.com/v1/";
var queryURL_v2 = "https://api.amctheatres.com/v2/";
var state = "georgia";

var georgia_queryURL = queryURL_v2 + "locations/states/" + state;


$.ajax({
    url: georgia_queryURL,
    headers: {'X-AMC-Vendor-Key': movies_api},
    method: 'GET'
}).done(function(movieData){
    console.log(movieData);

});