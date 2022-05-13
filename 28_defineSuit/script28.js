function defineSuit(card) {
  let lastCard = card.slice(-1);

 switch(lastCard) {

    case '♣' : return 'clubs';
    case '♦' : return 'diamonds';
    case '♥' : return 'hearts';
    default : return 'spades';
 }


 }

console.log(defineSuit('3♣'));

