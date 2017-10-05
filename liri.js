var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");

var keys = require("./keys.js");

// pulls 3rd entry from command line
var myArgs = process.argv[2];


// TWITTER =================================================================================================
// node liri.js my-tweets

if (myArgs === "my-tweets") {

	var client = new Twitter(keys);
		
	var params = {screen_name: '@gcdwyer1'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {

  		if (error) {

    		console.log(error);
    		return;

  		} else {

  			for (var i = 0; i < 20; i++) {

  				// var test = (tweets[0]);

	  			var twit = JSON.stringify("@" + tweets[i].user.screen_name + " tweeted '" + tweets[i].text + "' on " + tweets[0].created_at, null, 2);

	  			console.log(twit);

  			}
  		}
	});
}


// SPOTIFY =================================================================================================
// node liri.js spotify-this-song '<song name here>'

if (myArgs === "spotify-this-song") {

	var song = "";

	var nodeArgs = process.argv

	for (var i = 3; i < nodeArgs.length; i++) {

		song = song + " " + nodeArgs[i];

	}

	if (song == "") {

		song = "The+Sign";

		findSong();

	} else {

		findSong();

	}

	function findSong () {

		var spotify = new Spotify({
		    id: "9b6cc6da5ae44cd1a4e4c76cd228112c",
		    secret: "34872fcda78b446386c93f52955a53a9"
		});

		spotify.search({ type: 'track', query: '"' + song + '"' }, function(error, data) {

		    if (error) {

		        console.log(error);
		        return;

		    } else {

				console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name);
				console.log("Song Name: " + data.tracks.items[0].name);
				console.log("Link to Song: " + data.tracks.items[0].album.external_urls.spotify);
				console.log("Album Name: " + data.tracks.items[0].album.name);

			}
		});

	}

}

// MOVIE ========================================================================================
// node liri.js movie-this '<movie name here>'
// 40e9cece
if (myArgs === "movie-this") {

	// Display movie title, year, rating, rotten rating, country, language, plot and actors

	// if no movie provided, output Mr Nobody



	var movieName = "";
	var movieArr = [];

	for (var i = 3; i < process.argv.length; i++) {

		movieArr.push(process.argv[i]);

	}

	console.log(movieArr);

	if (!process.argv[3]) {

		movieName = "Mr.+Nobody";

		console.log("Mr Nobdy picked");

	} else {

		movieName = movieArr.join("+");

		console.log("movie: " + movieName);

	}

	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

	console.log("url: " + queryUrl);

	request(queryUrl, function(error, response, body) {


	    if (!error && response.statusCode === 200) {

		    console.log("Title: " + JSON.parse(body).Title);
		    console.log("Released: " + JSON.parse(body).Year);
		    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
		    console.log("Country Produced: " + JSON.parse(body).Country);
		    console.log("Language: " + JSON.parse(body).Language);
		    console.log("Plot: " + JSON.parse(body).Plot);
		    console.log("Actors: " + JSON.parse(body).Actors);

	    }

	});

}


if (myArgs === "do-what-it-says") {

	// use fs node package and take text from random.txt then use it on one of liri's commands

	console.log("Random");

}