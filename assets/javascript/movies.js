var movies_api = "2B2888AB-A2D4-437C-A0BD-5C58BF0211E3\n";
var user_search = "";
var queryURL_v1 = "https://api.amctheatres.com/v1/theatres/42\n";
var queryURL_v2 = "https://api.amctheatres.com/v2/theatres/42\n";
var state = "georgia";


.ajax({
    headers: {'X-AMC-Vendor-Key': movies_api},
    method: 'GET'
}).done(function(movieData){

});