function points(games){
    return games.map(el => el.split(':').map(Number)).reduce((count, num)=>{
        if (num[0] > num[1]) {
            count += 3;
        } else if (num[0] < num[1]){
            count += 0;
        } else {
            count += 1;
        }
        return count;
    }, 0);
}     

console.log(points(['3:1', '2:2', '0:1', '7:5', '5:5', '9:1', '1:2', '2:4', '3:9', '5:5']));