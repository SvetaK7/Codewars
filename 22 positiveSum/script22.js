function positiveSum(arr) {
    let rez = arr.filter(num => num >= 0);
    return rez.length === 0 ? 0 : rez.map(i => x = x + i, x = 0 ).reverse()[0];
  
}
console.log(positiveSum([]));

//the best solution
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }