var countSheep = function (num){
    let sheep = ' sheep...';
    let allSheep = ''
    for (i = 1; i <= num; i++){
        allSheep = allSheep + i + sheep;
    }
    return allSheep;
  }
console.log(countSheep(2));



