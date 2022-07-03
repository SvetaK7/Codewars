function pillars(numPill, dist, width) {
    return numPill > 1 ? (numPill - 1)*dist*100 + (numPill-2)*width : 0;    
  }
console.log(pillars(2,20,25));

