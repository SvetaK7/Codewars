function countPositivesSumNegatives(input){
    let count = 0;
    let sum = 0;
    if (input === 0){
        return [];
    }
    for (let i = 0; i < input.length; i++){
        input[i] > 0 ? count += 1 : sum += input[i];   
    }        
    if (count === 0 && sum === 0){
            return [];
    }

    return [count, sum];
}

console.log(countPositivesSumNegatives([]));