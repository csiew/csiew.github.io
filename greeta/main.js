var rawHeadlines;
var teleprompt;
var newsSource = "https://newsapi.org/v1/articles?source=sky-news&sortBy=top&apiKey=637a205b7d7141c9894f67dc00cdd8f7";

function grabHeadlines() {
    $.getJSON(newsSource, function(json) {
        rawHeadlines = json;
        teleprompt = "Hello Clarence! This is today's news, from " + rawHeadlines.source + " . ";
        $.each(json.articles, function() {
            teleprompt += this.title + ". ";
        });
        document.getElementById("content").innerHTML = "<h1>Today's news</h1>"
        for (var i = 0; i < rawHeadlines.articles.length; i++) {
            article = rawHeadlines.articles[i];
            document.getElementById("content").innerHTML += "<p><a href='" + article.url + "' target='_blank'>" + article.title + "</a></p>";
        }
        teleprompt += "And that is all for the news. Check back later for more! Bye."
        responsiveVoice.speak(teleprompt, "UK English Female");
    });
}

grabHeadlines();
