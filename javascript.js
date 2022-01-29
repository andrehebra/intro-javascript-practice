function add7(number) {
    return number + 7;
}

function multiply(first, second) {
    return first * second;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function lastLetter(text) {
    return text.charAt(text.length - 1);
}

console.log(lastLetter("hello"))