function paintLetterboxes(start, end){
    let res = Array(10).fill(0);
    for (let i = start; i <= end; i++){
       for (let number of (i + '')){
          res[number]++;
       }
    }
    return res;
 }
 console.log(paintLetterboxes(25, 27));