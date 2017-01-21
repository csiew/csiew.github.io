var rawData, apiurl, photoItem, photoURL;
var searchText = "mountain";
var searchTags = "";
var perPage = 20;
var contentType = 1; // 1 for photos only. 2 for screenshots only. 3 for 'other' only. 4 for photos and screenshots. 5 for screenshots and 'other'. 6 for photos and 'other'. 7 for photos, screenshots, and 'other' (all).
var safeSearchLevel = 1; // 1 = safe, 2 = moderate, 3 = NSFW, apparently?
var geoContext = 2; // 0 = undefined, 1 = indoors, 2 = outdoors

function getImages() {
    apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1606c88155db3961eabe6a2b653d8b41&per_page=" + perPage + "&content_type=" + contentType + "&text=" + searchText + "&tags=" + searchTags + "&is_commons&extras&safe_search=" + safeSearchLevel + "&format=json&nojsoncallback=1";
    $.getJSON(apiurl, function(json) {
        rawData = json;
        console.log(json);
        document.getElementById("content").innerHTML = "";
        for (var i = 0; i < 10; i++) {
            console.log(i);
            photoItem = json.photos.photo[i]
            photoURL = "https://farm" + photoItem.farm + ".staticflickr.com/" + photoItem.server + "/" + photoItem.id + "_" + photoItem.secret + "_h.jpg";
            document.getElementById("content").innerHTML += "<p><a href='" + photoURL + "' target='_blank'><img src='" + photoURL + "' width='100%' height='auto' /></a><br /><a href='https://www.flickr.com/photos/" + photoItem.owner + "/" + photoItem.id + "' target='_blank'>(source)</a></p>";
        }
    });
}

getImages();
