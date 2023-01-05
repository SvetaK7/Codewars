function costOfTraffic(A, B, C, D) {
   return D < B ? A : A + C*(D - B)
}

console.log(costOfTraffic(100, 10, 12, 1))




