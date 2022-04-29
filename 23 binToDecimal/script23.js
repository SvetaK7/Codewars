function binToDec(bin){
    let arr = bin.split('').map(x => parseFloat(x)).reverse();
    return arr.reduce((sum, elem, i = arr.length) => sum + elem*2**i, 0)
  }
console.log(binToDec('1101001'));

//the best solution
// function binToDec(bin){
//     return parseInt(bin,2);
//   }