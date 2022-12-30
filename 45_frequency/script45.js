function freqSeq(str, sep) {
    const myObj = str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {});
    let newStr = ''
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < Object.keys(myObj).length; j++) {
            if (str[i] === Object.keys(myObj)[j]) {
                newStr = newStr + Object.values(myObj)[j] + sep
            }
        }
    }
    return newStr.slice(-1) === sep ? newStr.slice(0, -1) : newStr
}

console.log(freqSeq('hello world', '-'))

// function freqSeq(str, sep) {
//     return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
// }
