  function add(a, b){
    return a + b
  }
  function multiply(a, b){
    return a * b;
  }
  function divide(a, b){
    return a / b;
  }
  function mod(a, b){
    // if (a - b < 0){
    //   let rez = a - b;
    //   return rez*(-1) ;
    // } else {
    //   return a - b;
    // }
    return a % b;
  }
  function exponent(a, b){
    return a**b;
  }
  function subt(a, b){
    return a - b;
  }

console.log(add(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 5));
console.log(mod(44, 8));
console.log(exponent(3, 2));
console.log(subt(3, 5));