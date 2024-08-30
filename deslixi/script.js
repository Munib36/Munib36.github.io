function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}

const text = document.getElementById("text");

setInterval(() => {
    let words = text.innerText.split(" ");
    let wordIndex = roll(0, words.length); // Get a random index for a word
    let word = words[wordIndex].split(""); // Split the word into characters for manipulation

    if (word.length > 1) { // Ensure the word has more than one character to swap
        // Get two distinct random indices for swapping characters
        let first = roll(0, word.length);
        let second;
        do {
            second = roll(0, word.length);
        } while (second === first);

        // Swapping characters in the word
        let temp = word[first]; 
        word[first] = word[second];
        word[second] = temp;

        // Join the modified word back and replace it in the original array
        words[wordIndex] = word.join("");
    }

    // Join the words back into a string and set the modified text back to the element
    text.innerText = words.join(" ");

    console.log(text.innerText); // Optional: Log the modified text to the console for testing
}, 50);
