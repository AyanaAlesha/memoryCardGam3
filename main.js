










    let results = document.getElementById("results");
    let startBtn = document.getElementById("start");
   
startBtn.addEventListener("click", function(){ 
    const level = document.getElementById("diffculty");
    let select = level.selectedIndex;
      console.log(select);

     if(select === 0 ){
        location.href = "game.html";
     } 
        if(select === 1){
        location.href="Lv2.html";
    }
     if(select === 2){
        location.href="Lv3.html";
     }
     })
document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll('.card');
        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard, secondCard;
    
        function flipCard() {
            if (lockBoard) return;
            if (this === firstCard) return;
    
            this.classList.add('flip');
    
            if (!hasFlippedCard) {
                // First click
                hasFlippedCard = true;
                firstCard = this;
                return;
            }
    
            // Second click
            secondCard = this;
    
            checkForMatch();
        }
    
        function checkForMatch() {
            let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    
            isMatch ? disableCards() : unflipCards();
        }
    
        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
    
            resetBoard();
        }
    
        function unflipCards() {
            lockBoard = true;
    
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
    
                resetBoard();
            }, 1000);
        }
    
        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }
    
        cards.forEach(card => card.addEventListener('click', flipCard));
    });
    
    
     
      


