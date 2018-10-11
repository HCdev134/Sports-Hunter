(function() {
  var current_result = '';

  function searchByRandom() {
    window.location.href = "https://en.wikipedia.org/wiki/Special:Random";
  }

  function searchByInput() {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&continue=&srsearch=" + (document.getElementById("search_input").value) + "&srwhat=text&srprop=timestamp&prop=info&inprop=url&origin=*", function(result) {
      console.log(result);
      current_result = result;
      for (var i = 0; i < 10; i++) {
        console.log("https://en.wikipedia.org/?curid=" + result.query.search[i].pageid);
        $("#search_link" + (i + 1)).attr("href", ("https://en.wikipedia.org/?curid=" + result.query.search[i].pageid));
        $("#search_link" + (i + 1)).html(result.query.search[i].title);
      }
      $("#continue_button").on("click", continueSearch);
    });
  }

  function continueSearch() {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&continue=&srsearch=" + (document.getElementById("search_input").value) + "&srwhat=text&srprop=timestamp&prop=info&inprop=url&origin=*&continue=" + current_result.continue.continue + "&sroffset=" + current_result.continue.sroffset, function(result) {
      console.log(result);
      current_result = result;
      for (var i = 0; i < 10; i++) {
        console.log("https://en.wikipedia.org/?curid=" + result.query.search[i].pageid);
        $("#search_link" + (i + 1)).attr("href", ("https://en.wikipedia.org/?curid=" + result.query.search[i].pageid));
        $("#search_link" + (i + 1)).html(result.query.search[i].title);
      }
    });
  }

  $(window).load(function() {
    $("#random_button").on("click", searchByRandom);
    $("#search_button").on("click", searchByInput);
  });
}());