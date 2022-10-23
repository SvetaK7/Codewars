function encode(s) {
    let word = s.split('');
    let letter1 = [];
    let letter2 = [];
    let letterEnd = [];
    // let letter = word.slice(1, 2);
    // let letter3 = word.slice(0,-1);
    if (word.length % 2 === 0) {
        for (let i = 0; i < word.length / 2; i++) {
            letter1 = word.slice(i, i + 1);
            if (i !== 0) {
                letter2 = word.slice(word.length - (i + 1), word.length - i)
            } else {
                letter2 = word.slice(word.length - (i + 1))
            }
            letterEnd = letterEnd + letter1 + letter2;
        }
    } else {
        for (let i = 0; i < word.length / 2; i++) {
            letter1 = word.slice(i, i + 1);
            if (i !== 0) {
                letter2 = word.slice(word.length - (i + 1), word.length - i)
            } else {
                letter2 = word.slice(word.length - (i + 1))
            }
            letterEnd = (letterEnd + letter1 + letter2);
        }
        return letterEnd.slice(0, -1);
    }
    return letterEnd;
}

console.log(encode('sveta'));

function decode(s) {
    let word = s.split('');
    let letter1 = [];
    let letter2 = [];
    let letter3 = [];
    let letterEnd = [];
    if (word.length === 0){
        return ''
    }
    if (word.length === 1){
        return s
    }
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            letter1 = letter1.concat(word.slice(i, i + 1))
            console.log(letter1)
        } else {
            letter2 = letter2.concat(word.slice(i, i + 1))
            console.log(letter2)
        }
    }
    return letter1.concat(letter2.reverse()).join('')
}

console.log(decode(' a'))
