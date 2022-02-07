function lastDigit(n, d) {
    if (d <= 0) {
        return arr = [];
    } else {
        return arr = String(n).split('').slice(-d).map((num) =>{
            return +num;
        });   
    }
 
}
     
console.log(lastDigit(7839, 10));





