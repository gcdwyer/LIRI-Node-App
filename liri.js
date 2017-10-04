var Twitter = require("twitter");

var keys = require("./keys.js");



// pulls 3rd entry from command line
var myArgs = process.argv[2];


if (myArgs === "my-tweets") {

	var client = new Twitter(keys);
		
	var params = {screen_name: '@gcdwyer1'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {

  		if (error) {
    		console.log(error);

  		} else {

  			for (var i = 0; i < 20; i++) {

  				// var test = (tweets[0]);

	  			var twit = JSON.stringify("@" + tweets[i].user.screen_name + " tweeted '" + tweets[i].text + "' on " + tweets[0].created_at, null, 2);

	  			console.log(twit);

  			}
  		}
	});
}



if (myArgs === "spotify-this-song") {

	// Display artist, song name, link and album

	// if no song provided, play Ace of Base

	console.log("Spotify");

}

if (myArgs === "movie-this") {

	// Display movie title, year, rating, rotten rating, country, language, plot and actors

	// if no movie provided, output Mr Nobody

	console.log("Movie");

}

if (myArgs === "do-what-it-says") {

	// use fs node package and take text from random.txt then use it on one of liri's commands

	console.log("Random");

}