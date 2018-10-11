var APIKey = "7ec980d795c04ff1adf6aff993c1eff9";

var queryURL = 'https://newsapi.org/v2/everything?' +
          'q=NFL' + '&' +
          'from=2018-09-29&' +
          'sortBy=popularity&' +
          'apiKey=7ec980d795c04ff1adf6aff993c1eff9' + '&' +
          APIKey;

  // API for news article on load
      $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        
        console.log(queryURL);

        console.log(response);
        
        var random = Math.floor(Math.random() * 19) + 1;
        
        var authorName = response.articles[random].author;

        var loadOut = $("<img>").attr("src", response.articles[random].urlToImage);

        var description = $("<p>").text("Discription: " + response.articles[random].description);

        var newstitle = $("<h1>").text(response.articles[random].title);

        var newsSource = $("<a>").text(response.articles[random].url);

      //API news img into img on layout
      
      $("#newsIMG").empty();
      $(loadOut).attr('width', '1000px');
      $(loadOut).attr('height', '400px');
      $("#newsIMG").prepend(loadOut);

      
      //Title news api
      $("#titleArt").empty();
      $("#titleArt").text(response.articles[random].title);

      //News api Author
      $("#titleAuth").empty();
      $("#titleAuth").text("Author: " + authorName);

      // discription
      $("#newsDis").empty();
      $("#newsDis").text(response.articles[random].description);

      // source
      $("#source").attr('href', response.articles[random].url);

     
    });

    // API for using input search to find data from API
    function searchNews(news){
    
        var queryURL = 'https://newsapi.org/v2/everything?' +
              'q=NFL' + news + '&' +
              'from=2018-09-29&' +
              'sortBy=popularity&' +
              'apiKey=7ec980d795c04ff1adf6aff993c1eff9' + '&' +
              APIKey;
    
        var random = Math.floor(Math.random() * 21) + 1;
              
    
    
    $.ajax({
        url: queryURL,
          method: "GET"
        }).done(function(response) {
            
            console.log(queryURL);
            console.log(response);
            
            
            var authorName = $("<p>").text("Author: " + response.articles[random].author);
            var loadOut = $("<img>").attr("src", response.articles[random].urlToImage);
            var discription = $("<p>").text("Discription: " + response.articles[random].description);
            var newstitle = $("<h1>").text(response.articles[random].title);
    
          $("#news-div").empty();
          $("#news-div").append(loadOut, newstitle, authorName, discription);
         
        });
    }

    // on click to search API data for value of the input 
    $("#buttonClickValue").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the artist name
        var inputArticle = $("#inputSearchValue").val().trim();
    
        // Running searchNews function(passing in the artist as an argument)
        searchNews(inputArticle);
      });