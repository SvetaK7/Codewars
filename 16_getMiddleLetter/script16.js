function getMiddle(s){
    let delLen = s.length / 2;
    if (s.length % 2 != 0){
        return s.charAt(parseInt(delLen))
    } else {
        return s.slice(delLen - 1, delLen + 1)
    }
}   
     
console.log(getMiddle('Svetana'));
