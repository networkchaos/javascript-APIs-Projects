let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
// API URL
let url = "https://meme-api.com/gimme";
//Array of subreddit of ypur choice
let subreddits = ["catmemes","wholesomemes", "dogmemes", "discordmemes", "me_irl"];



//create function to get random meme
let getMeme = () => {

// choose a random subreddit from the subreddit array = inshort to pick type of meme from the subreddit arrays
let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];

//Fetch data from the api
fetch(url + randomSubreddit).then(resp => resp.json ()).then(data => {
    console.log(data);
    let memeImg = new Image();
    //Displays the meme image and title only after the image loads
    memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
    };
    memeImg.src = data.url;
});




};

//Calling the getMeme(function) on the button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);




















































