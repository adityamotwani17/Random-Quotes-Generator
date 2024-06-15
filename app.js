

function fetchQuote(){
    fetch("https://type.fit/api/quotes").then((data)=>{
    return data.json();
}).then((quotes)=>{
    let randomIndex = Math.floor(Math.random()*quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex].text;
    document.getElementById('author').innerText = "Author: " + quotes[randomIndex].author;
});
}
fetchQuote();