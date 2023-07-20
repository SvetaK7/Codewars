function whoIsPaying(name){
    if (name.length <= 2){
        return name.split();
    }
    const cutName = name.split('').slice(0, 2).join('').split()
    return  name.split().concat(cutName)
}

console.log(whoIsPaying('Dhv'))

function whoIsPaying2(name){
    return name.length > 2 ? [name, name.slice(0,2)] : [name]
}