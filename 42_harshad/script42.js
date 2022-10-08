function numberJoy(n) {
    const an = n.toString().split('').reduce((a, b) => {
        return +a + +b
    })
    const na = an.toString().split('').reverse().join('')

    if (Number.isInteger(n / an)) {
        if (an * na === n) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(numberJoy(1729));



