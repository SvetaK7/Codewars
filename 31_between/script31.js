function between(a, b){
let arr = [];
let len = b - a;
for (let i = 0; i <= len; i++){
    arr[i] = a;
    a = a + 1;
}
return arr;
}

console.log(between(8, 10));

// function between(a, b){
//     let arr = [];
//     for (let i = a; i <= b; i++){
//         arr.push(i);
//     }
//     return arr;
//     }