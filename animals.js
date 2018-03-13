//-------------animal array.
let animals = ["dog", "cat", "lion", "rabbit", "horse", "lizard", "dragon"];






//-------------------WHAT I COULDNT DO--------------------/////
//-----------When gif was pressed if there was a gif above it, that gif would dissapear. When gif was animated the gif wouldnt be able to be de-animated








//---------------When the new animal is added.
function myfunction(){
  animals.push($("input").val());
 var addANIMALS = $("input").val();
  $('#Animal-buttons').append($("<button>",{'data-animal' : addANIMALS,'type': 'button', 'class': 'btn btn-primary'}).text(addANIMALS));
   $('button').css({'margin-right': '5px', 'margin-left': '5px','margin-top': '20px'})
//---------------when new animal is pushed
  $("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal +  "&api_key=dc6zaTOxFJmzC&limit=1&rating=g";
     $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

       var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var animalDiv = $("<div>", {"class": 'animal'});
          var p = $("<div class='item'>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var animals = $("<img>",{'data-state': 'still', 'class': 'gif'});
          //--------------original load is STILL
          animals.attr("src", results[i].images.fixed_height_still.url);
          //--------------second load is animated
          var animalanimate = $("<img>",{'data-state': 'animated', 'class': 'gif'});
          animalanimate.attr("src",results[i].images.fixed_height.url);
          //--------------second load isnt added yet
           animalDiv.prepend(p);
            animalDiv.prepend(animals);
            $("#animals").prepend(animalDiv);

        }
         $('.gif').on("click", function(){
          var state = $(this).attr("data-state");
          if (state === 'still') {
            $(this).replaceWith(animalanimate);
          }
  
      });
      });
    });
};


//---------------------when the page loads buttons are made.
$.each(animals, function(i, val){
  $('#Animal-buttons').append($("<button>",{'data-animal' : val,'type': 'button', 'class': 'btn btn-primary'}).text(val));
  $('button').css({'margin-right': '5px', 'margin-left': '5px','margin-top': '20px'})

});
//---------------------when original buttons are pushed
   $("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal +  "&api_key=dc6zaTOxFJmzC&limit=1&rating=g";
     $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

       var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var animalDiv = $("<div>", {"class": 'animal'});
          var p = $("<div class='item'>");
          var p = $("<p>").text("Rating: " + results[i].rating);
          var animal = $("<img>",{'data-state': 'still', 'class': 'gif'});
          //--------------original load is STILL
          animal.attr("src", results[i].images.fixed_height_still.url);
          //--------------second load is animated
          var animalanimate = $("<img>",{'data-state': 'animated', 'class': 'gif'});
          animalanimate.attr("src",results[i].images.fixed_height.url);
          //--------------second load isnt added yet
           animalDiv.prepend(p);
            animalDiv.prepend(animal);
            $("#animals").prepend(animalDiv);
        }
        //--------when clicked animation starts
          $('.gif').on("click", function(){
          var state = $(this).attr("data-state");
          if (state === 'still') {
            $(this).replaceWith(animalanimate);
          }
      });
      });
    });

