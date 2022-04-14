function squareOrSquareRoot(array){
   arrNew = [];
   for (i = 0; i < array.length; i++){
      let a = Math.sqrt(array[i]);
      if (Number.isInteger(a)){
         arrNew.push(a);
      } else {
         let b = array[i]**2;
         arrNew.push(b);
      } 
   }
// newArr = array.map((num) => Math.sqrt(num));

return arrNew;
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]));