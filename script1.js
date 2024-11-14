




document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let score = 0; // Initialize score variable

    // Function to flip a card
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    // Function to check if two flipped cards match
    function checkForMatch() {
        let isMatch = firstCard.dataset.color === secondCard.dataset.color &&
        firstCard.dataset.emoji === secondCard.dataset.emoji;

        if (isMatch) {
            disableCards();
            updateScore(); // Update score if there's a match
        
        
        } else {
            unflipCards();
        }
    }

    // Function to disable matched cards
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }

    // Function to unflip unmatched cards
    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1000);
    }

    // Function to reset the board state
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    // Function to update the score display
    function updateScore() {
        score += 10;
        document.getElementById("score").textContent = score;
    }

    // Function to shuffle the cards
    function shuffleCards() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    }
    
    shuffleCards();
    cards.forEach(card => card.addEventListener('click', flipCard));

   
});
