function squareOrSquareRoot(array){
   return array.map((num) => {
      let root = Math.sqrt(num);
      return (Number.isInteger(root)) ? root : num**2;
   });


}
console.log(squareOrSquareRoot([4,3,9,7,2,1]));