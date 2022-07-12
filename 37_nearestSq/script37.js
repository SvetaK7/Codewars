function nearestSq(n) {
  for (let i = 1; n >= 1; i++){
    if (Number.isInteger(Math.sqrt(n))){
      return n
    }
    let plus = n + i;
    let minus = n - i;
    let rezP = Math.sqrt(plus);
    let rezM = Math.sqrt(minus);
    if (Number.isInteger(rezP)){
        return plus
    }
    if (Number.isInteger(rezM)){
     return minus
    }
  }
}
console.log(nearestSq(9));

