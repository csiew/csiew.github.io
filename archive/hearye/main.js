var rawHeadlines;
var teleprompt;
var newsSource;

var apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1606c88155db3961eabe6a2b653d8b41&per_page=10&content_type=6&format=json&nojsoncallback=1";

function grabHeadlines() {
    $.getJSON(newsSource, function(json) {
        rawHeadlines = json;
        document.getElementById("content").innerHTML = "<h2>" + rawHeadlines.source + "</h2><br />"
        teleprompt = "This is today's news, from " + rawHeadlines.source + " . ";
        $.each(json.articles, function() {
            teleprompt += this.title + ". ";
        });
        document.getElementById("content").innerHTML += "<ul>";
        for (var i = 0; i < rawHeadlines.articles.length; i++) {
            article = rawHeadlines.articles[i];
            document.getElementById("content").innerHTML += "<li><a href='" + article.url + "' target='_blank'><img src='" + article.urlToImage + "' width=320px /><br /><br />" + article.title + "</a></li>";
        }
        document.getElementById("content").innerHTML += "</ul>";
        teleprompt += "That's all from" + rawHeadlines.source + "."
        responsiveVoice.speak(teleprompt, "UK English Female", {pitch: 1}, {rate: 1});
    });
}

function changeSource(diffSource) {
    newsSource = "https://newsapi.org/v1/articles?source=" + diffSource + "&sortBy=top&apiKey=637a205b7d7141c9894f67dc00cdd8f7";
    responsiveVoice.cancel()
    grabHeadlines();
}
