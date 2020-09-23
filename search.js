var results = [];
$("#search-btn").on("click", function (event) {
    event.preventDefault();
    var search = $("#searchTerm").val();
  console.log(search);
    var apiKey = "XH7FUB8EEP6kAlBvxbIiARtiPJao53QS"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search +" &api-key=" + apiKey;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    results = response.response.docs;
    console.log(results);
    console.log(queryURL);
    getSearchResults();
});
});
function getSearchResults() {
    if (results) {
        $("#articleDump").empty();
        console.log("check");
        for (var i = 0; i < results.length; i++) {
            var headline = $('<h4>').text(results[i].headline.main);
            var webURL = $('<h5>').text(results[i].byline.original);
            $("#articleDump").append(headline);
            $("#articleDump").append(webURL);
            console.log(headline);
        }
    }
}

