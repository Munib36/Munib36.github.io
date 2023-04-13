const joke = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=religious,political&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => joke.textContent = item.joke)
}
getJoke();
btn.addEventListener("click", () => {
    getJoke();
})