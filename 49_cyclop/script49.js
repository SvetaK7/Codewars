function cyclops(n) {
    const str = (n).toString(2)
    return str === str.toString().split('').reverse().join('') && str >= 101
}
console.log(cyclops(1))

// function cyclops(n) {
//     let binary = n.toString(2).split('0');
//     return  binary.length == 2 &&  binary[0] == binary[1];
// }




