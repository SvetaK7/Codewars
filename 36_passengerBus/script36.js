function enough(cap, on, wait) {
    let people =  wait - (cap - on);
    return people < 0 ? 0 : people    
  }
console.log(enough(100, 60, 50));

