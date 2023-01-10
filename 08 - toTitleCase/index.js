// Capitalizes the word
function capitalizeWord(word){
    return word.slice(0,1).toUpperCase() + word.slice(1);
}

// Capitalizes all words in sentence
function toTitleCase(str){
    return str.split(" ").map(capitalizeWord).join(" ")
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
