var twitterKey = require("./keys.js");

// APIs
var Twitter = require('twitter');


var params = {screen_name: '@gcdwyer1'};



// pulls 3rd entry from command line
var myArgs = process.argv[2];


if (myArgs === "my-tweets") {

	// Display last 20 tweets and when they were created
	// console.log("Tweets");

	twitterKey.get('statuses/user_timeline', params, function(error, tweets, response) {

  		if (!error) {

    		console.log(tweets);

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