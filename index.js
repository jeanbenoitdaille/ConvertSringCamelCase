function toCamelCase(sentence) {
    let words = sentence.split(" ");
    let result = words.shift().toLowerCase();
    for (let word of words) {
        result += word[0].toUpperCase() + word.slice(1);
    }
    return result;
}
 
let sentence = "Phrase en camel case";