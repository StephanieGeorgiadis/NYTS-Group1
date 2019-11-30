var apiKey = "HmO33fnGxNS1BAXNo5ckbmHW0nkG65ZX";

var query = "election";

var numRecords = 0;

var begin_date = "&begin_date=" + "20120101";

var end_date = "&end_date=" + "20121231";

var mainUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


var queryUrl = "";

console.log("jhjhjhjhjhjh");

$("#search-form").on("submit", function () {

    event.preventDefault();
    // console.log(queryUrl, "url");
    query = $("#search-term").val();

    if (query==""){
        alert("Please enter no of records");
    }

    numRecords = $("#num-records").val();
    numRecords = parseInt(numRecords);

    
    // console.log(numRecords);

    queryUrl = mainUrl + "?q=" + query + "&api-key=" + apiKey + begin_date + end_date;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // console.log(response.response.docs);

        for (var i = 0; i < numRecords; i++) {
            var doc = response.response.docs[i];

            var li = $("<li>");
            li.html(doc.abstract);
            li.attr("class", "list-group-item");
            $("ul").append(li);

        }

    });



});