$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=HmO33fnGxNS1BAXNo5ckbmHW0nkG65ZX",
    method: "GET"
}).then(function(response){
    console.log(response);
})