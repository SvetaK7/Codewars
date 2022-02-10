function getCount(str){
    // var vowelsCount = 0;
    return str.split('').reduce((vowelsCount, letter) => {
        if ( letter  === 'a' || letter  === 'e' || letter  === 'i' || letter  === 'o' || letter  === 'u'  ) {
            vowelsCount ++;
        }
        return vowelsCount;
    }, 0);
   
}     
console.log(getCount('go ghome'));

// function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }