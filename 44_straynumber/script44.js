function strayNumber(arr) {
    const res = arr.sort((a, b) => a - b)
    if (res[res.length - 1] === res[res.length - 2]){
        return res[0]
    }
    return  res[res.length - 1]
}

console.log(strayNumber([83, 77, 83, 83, 83 ]))
