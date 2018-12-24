// this is to grab the cards in the deck
let deck = document.querySelector('.deck') 
// we need this because we will be pushing all of the clicked cards into this array to be evaluated.
// it is best to put into the global scope because we are going to be using it a lot.
let openCards = []

function shuffleDeck() {
	
}

shuffleDeck()


//this is a click handler. an event was put onto deck, which means it listens for every card to be clicked. 
//conditionals were put on the handler so that the user can only click up to 2 cards at a time
//the clicks will toggle the card andn push it into the openCards array
//check: if they do click 2 cards, console.log 'dos cards'
//added .includes b/c we only want the click to be displayed and added to the openCard array if it's not already in there.
//this is because we only want unique card clicks
deck.addEventListener('click', event => {
	const clickTarget = event.target
	if (clickTarget.classList.contains('card') && 
		openCards.length < 2  && 
		!openCards.includes(clickTarget)
		) {
		openCard(clickTarget)
		addOpenCard(clickTarget)
		if(openCards.length === 2) {
			checkForMatch()
		}
		
	}
})

// created a function to open the card, called 'openCard' We can then put this function into the eventlistener.
//.toggle means to display or hide matched elements.
function openCard(clickTarget) {
	clickTarget.classList.toggle('open')
	clickTarget.classList.toggle('show')
}


//creating a new function to put the openCard(s) into the openCards array. 
//calling it addOpenCard because we are "adding" the card into the array.
//.push will push the clickTargets into the array.
function addOpenCard (clickTarget) {
	openCards.push(clickTarget)
}




//now we are creating a new function to see if the cards match!
//since we set the user to only 2 clicks, those 2 clicks push the first and second index into the openCard array
//we are checking if those indexes match with this new function
//if the [0] is equal to [1] then..
// we want to toggle the match on both elements and then reset the array
//if they dont match we want to reset the array and turn the toggle off
//time out is a callback function to give the look of a "turn" letes the user see both of the cards (1000ms) before turning over
function checkForMatch () {
	if (
		openCards[0].firstElementChild.className ===
		openCards[1].firstElementChild.className
	) {
		openCards[0].classList.toggle('match')
		openCards[1].classList.toggle('match')
		openCards = []
	} else {
		openCard(openCards[0])
		openCard(openCards[1])
		openCards = []

		setTimeout(() => {
			openCard(openCards[0])
			openCard(openCards[1])
			openCards = []
		}, 1000)
	}
}








































