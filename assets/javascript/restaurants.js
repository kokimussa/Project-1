var restaurants_api = "d52ecb4be52dca714fafcf32915e7866";
var user_search= "chinese";
var queryURL = "https://developers.zomato.com/api/v2.1/search?q="+user_search+"&count=10";

var restaurants = [];


$.ajax({
    url: queryURL,
    headers:  {'user-key': restaurants_api }, //different from class's ajax call, we need to add
    method: 'GET'
}).done(function(restaurantData){
    console.log(queryURL);
    console.log(restaurantData);
    var results = restaurantData.restaurants; //number of restaurants found
    console.log("results:"+results);
    for (var i = 0 ; i < results.length ; i++){
        var restaurantDiv = $("<div>");

        // Creating a paragraph tag with the restaurants' name
        var pName = $("<p>").text(results[i].restaurant.name);

        // Creating a paragraph tag with the restaurants' rating
        var pRating = $("<p>").text(results[i].restaurant.user_rating.aggregate_rating);

        // Creating a paragraph tag with the restaurants' url
        var pURL = $("<p>").text("href",results[i].restaurant.url);

        // Creating a paragraph tag with the restaurants' photo_url




        restaurantDiv.append(i+1);
        restaurantDiv.append(pName);
        restaurantDiv.append(pRating);
        restaurantDiv.append(pURL);

        $("#restaurant-appear-hear").append(restaurantDiv);

    }
   // console.log(restaurants);
    console.log("//////");
    //var restaurantName = restaurants[8].restaurant.name;
   // console.log(restaurantName);
});
