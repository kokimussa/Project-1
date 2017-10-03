
var concerts_apikey= "qqlfe7PARIytlsCOVfsRaER3zT5toMOq";
var user_search= "concerts";
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey="
    + concerts_apikey+"&radius=30&unit=miles&city=atlanta&classificationName=music&size=10";

var concerts = [];

$.ajax({
    type:"GET",
    url: queryURL,
    async:true,
    dataType: "json",
    success: function(json) {
        console.log(json);
        // Parse the response.
        // Do other things.
        //for(var i = 0; i < 10)
    },
    error: function(xhr, status, err) {
        // This time, we do not end up here!
    }
});







// $.ajax({
//     url: queryURL,
//     headers:  {'user-key': restaurants_api }, //different from class's ajax call, we need to add
//     method: 'GET'
// }).done(function(concertsData){
//     console.log(queryURL);
//     restaurantData
// });
