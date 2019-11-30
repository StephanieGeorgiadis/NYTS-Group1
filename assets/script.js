$.ajax({
    url: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=9xqZ0KkDtnHkHX9C;
    method: "GET"
}).then(function(response){
    console.log(response);
})