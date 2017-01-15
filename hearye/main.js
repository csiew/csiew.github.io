var rawHeadlines;
var teleprompt;
var newsSource;

function grabHeadlines() {
    $.getJSON(newsSource, function(json) {
        rawHeadlines = json;
        document.getElementById("content").innerHTML = "<h2>" + rawHeadlines.source + "</h2><br />"
        teleprompt = "Hello there! This is today's news, from " + rawHeadlines.source + " . ";
        $.each(json.articles, function() {
            teleprompt += this.title + ". ";
        });
        for (var i = 0; i < rawHeadlines.articles.length; i++) {
            article = rawHeadlines.articles[i];
            document.getElementById("content").innerHTML += "<hr /><p><a href='" + article.url + "' target='_blank'><img src='" + article.urlToImage + "' width=320px /><br /><br />" + article.title + "</a></p>";
        }
        teleprompt += "And that is all for the news. Check back later for more! Bye."
        responsiveVoice.speak(teleprompt, "US English Female", {pitch: 1}, {rate: 1});
    });
}

function changeSource(diffSource) {
    newsSource = "https://newsapi.org/v1/articles?source=" + diffSource + "&sortBy=top&apiKey=637a205b7d7141c9894f67dc00cdd8f7";
    responsiveVoice.cancel()
    grabHeadlines();
}
