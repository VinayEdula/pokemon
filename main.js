$("#submit-button").on("click", function (event) {
  $("#card-container").empty();
  event.preventDefault();
  var pokemon = $("#search")
    .val()
    .trim();

  $.ajax({
    method: "GET",
    url: "https://api.pokemontcg.io/v1/cards?name=" + pokemon.toLowerCase()
  }).then(function (response) {
    $("#card-container").append("\n");
    for (var i = 0; i < response.cards.length; i++) {
      var pokemonCard = $("<img class='pkmn-card'>");
      pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
      $("#card-container").append(pokemonCard);
    }
  });
});
