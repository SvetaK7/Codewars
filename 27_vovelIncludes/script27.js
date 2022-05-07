function vowelIndices(word){
   let newArr = [];

   for (let i = 0; i < word.length; i++) {
      if (word[i] === 'a' || word[i] === 'A') {
         newArr.push(i+1);
      } else if (word[i] === 'e' || word[i] === 'E') {
         newArr.push(i+1);
      } else if (word[i] === 'i' || word[i] === 'I') {
         newArr.push(i+1);
      } else if (word[i] === 'o' || word[i] === 'O') {
         newArr.push(i+1);
      } else if (word[i] === 'u' || word[i] === 'U') {
         newArr.push(i+1);
      } else if (word[i] === 'y' || word[i] === 'Y') {
         newArr.push(i+1);
      }
      
   }

   return newArr;
 }

console.log(vowelIndices('aaaammm'));


// function vowelIndices(word) {
//    var arr = [];
//    for(var i = 0; i < word.length; i++) {
//      if(/[aeioyu]/i.test(word[i])) {
//        arr.push(i+1);
//      }
//    }
//    return arr;
//  }
