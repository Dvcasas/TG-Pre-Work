const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

/* While loops continue to run until the stopping condition is met so makle sure
to put one in. It is possible to create an infinite loop. */
