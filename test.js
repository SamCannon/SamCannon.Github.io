



//function testThatApi() {

var capCall = "https://gateway.marvel.com/v1/public/characters?name=Captain%20America&apikey=610ce3a19d117942aa84fe424579033f";

	/**$.ajax({
		url: capCall,
		method: "Get"
	}).done(function(response) {

		var toDisplay = response.data.results.description;

		$("#test").html(toDisplay);

	});

};

$(document).ready(function() {
	testThatApi();
});**/


getMarvelAPI();


function getMarvelAPI() {

	var attrTxt;

    $.ajax({

	    url: capCall,
	    method: 'GET'

    }).done(function(response) {

	    console.log(response);
	    attrTxt = response;
           
    });

    $("#test").html(attrTxts);
    $("#test").html("What the fuck?");
};