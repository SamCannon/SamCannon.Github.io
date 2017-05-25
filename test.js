



function testThatApi() {

var capCall = "https://gateway.marvel.com/v1/public/characters?name=Captain%20America&apikey=a81b78c534562c5384986ee7dad0b0f7a124e249";

	$.ajax({
		url: capCall,
		method: "Get"
	}).done(function(response) {

		var toDisplay = response.data.results.description;

		$("#test").html(toDisplay);

	});

};

$(document).ready(function() {
	testThatApi();
});

/**function getMarvelAPI() {
        $.ajax({
            url: 'https://gateway.marvel.com/v1/public/characters?name=a81b78c534562c5384986ee7dad0b0f7a124e249',
            method: 'GET'
        }).done(function(response) {
            console.log(response);
    });
    }**/