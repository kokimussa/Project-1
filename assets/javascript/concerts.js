
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
    success: function(concertData) {
        console.log(concertData);
        var concertResult = concertData._embedded.events;
        for(var i = 0; i < 10; i++) {
            var concertDiv = $("<div>");

            // Creating a paragraph tag with the concert's name
            var pName = $("<p>").text(concertResult[i].name);

            // Creating a paragraph tag with the concert's date
            var pDate = $("<p>").text(concertResult[i].dates.start.localDate + ", " + concertResult[i].dates.start.localTime);


            // Creating an image tag with the concert's poster
            var concert_poster_url = concertResult[i].images[1].url;
            var concertImage = $("<img>");
            concertImage.attr("src", concert_poster_url);


            concertDiv.append(i+1);
            concertDiv.append(pName);
            concertDiv.append(pDate);
            concertDiv.append(concertImage);

            $("#concerts-appear-hear").append(concertDiv);
        }




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
