const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if(word.startsWith(":") && word.endsWith(":")){
        const newWord = word.slice(1, -1)
        return emojis[newWord] ? emojis[newWord] : newWord
    }
    else return word
}

function emojifyPhrase(phrase){
    return phrase.split(' ').map(emojifyWord).join(' ');
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
