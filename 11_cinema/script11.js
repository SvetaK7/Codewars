function movie(card, ticket, perc){
    let priceA = 0;
    let  priceB = card;
    let i = 0;
    for (; Math.ceil(priceB) >= priceA; i++ ){
        
        priceB = priceB + ticket*(perc ** (i + 1));
        priceA += ticket;
        
    }
    return i;
}

console.log(movie(500, 15, 0.9));