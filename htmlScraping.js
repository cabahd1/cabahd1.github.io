const apiKey = "SECRET_API_KEY";
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.getElementById("results");
const googleAPIUrl = "https://www.googleapis.com/youtube/v3/search";
searchButton.addEventListener("click", (e) => {
    const searchTerm = document.getElementById("searchQuery").value; 
    const apiPrefix = "&key=";
    const searchQuery = "?part=snippet&q=" + searchTerm + apiPrefix + apiKey;
    const url = googleAPIUrl + searchQuery;
    fetch(url)
      .then(response => response.json())
      .then((results) => {
        results.items.forEach(item => { 
          if (item.id.videoId != undefined) {
            const link = `https://www.youtube.com/watch?v=${item.id.videoId}`;
            resultsDiv.innerHTML += "<br /><br />";
            resultsDiv.innerHTML += `<a href="${link}">${item.snippet.title}</a>`;
            resultsDiv.innerHTML += "<br /><br />";
            resultsDiv.innerHTML += `<img src="${item.snippet.thumbnails.high.url}" />`;
          } 
        })   
      })
});