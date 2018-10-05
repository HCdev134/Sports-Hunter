var APIKey = "7ec980d795c04ff1adf6aff993c1eff9";

var queryURL = 'https://newsapi.org/v2/everything?' +
          'q=NFL' + '&' +
          'from=2018-09-29&' +
          'sortBy=popularity&' +
          'apiKey=7ec980d795c04ff1adf6aff993c1eff9' + '&' +
          APIKey;

$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        
        console.log(queryURL);

        console.log(response);
        
        var random = Math.floor(Math.random() * 21) + 1;
        
        var authorName = $("<p>").text("Author: " + response.articles[random].author);

        var loadOut = $("<img>").attr("src", response.articles[random].urlToImage);

        var description = $("<p>").text("Discription: " + response.articles[random].description);

        var newstitle = $("<h1>").text(response.articles[random].title);

      //API news img into img on layout
      
      $("#newsIMG").empty();
      $("#newsIMG").attr("src", response.articles[random].urlToImage);
      $("#newsIMG").prepend(loadOut);
      
      //Title news api
      $("#titleArt").empty();
      $("#titleArt").text(response.articles[random].title);

      //News api date
      $("#titleAuth").empty();
      $("#titleAuth").text("Author: " + response.articles[random].author);

      $("#newsDis").empty();
      $("#newsDis").text(response.articles[random].description);


     
    });

    function searchNews(news){
    
        var queryURL = 'https://newsapi.org/v2/everything?' +
              'q=' + news + '&' +
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
    
    
    $("#buttonClickValue").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the artist name
        var inputArticle = $("#inputSearchValue").val().trim();
    
        // Running searchNews function(passing in the artist as an argument)
        searchNews(inputArticle);
      });