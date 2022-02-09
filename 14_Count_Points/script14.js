function points(games){
    const arrNumber = games.join(':').split(':').map(Number);
    let point = 0;
    for (let i = 0; i < arrNumber.length; i= i + 2){
        if (arrNumber[i] > arrNumber[i+1]){
            point += 3;
        } else if (arrNumber[i] < arrNumber[i+1]){
            point += 0;
        } else if (arrNumber[i] === arrNumber[i+1]){
            point += 1;
        }
    }
    return point;
}     

console.log(points(['3:1', '2:2', '0:1', '7:5', '5:5', '9:1', '1:2', '2:4', '3:9', '5:5']));