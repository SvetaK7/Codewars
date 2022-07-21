function factory(x){
    return myArray => myArray.map(a => a*x )
}

console.log(factory(5)([1, 2, 3]));


