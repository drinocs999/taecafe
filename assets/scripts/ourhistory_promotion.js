
//Declare Variables

document.addEventListener('DOMContentLoaded', function () {
  const browser = window.document;
  const board = browser.getElementById('promo-container-game');
  const cards = Array.from(board.children);
  const containerPics = browser.getElementById('game-info');
  const picsPopOver = Array.from(containerPics.children);
  const prizes = ["10% OFF", "15% OFF", "7% OFF", "5% OFF", "NO WIN", "GOOD LUCK NEXT TIME", "ALMOST THERE", "TRY AGAIN", "OOOPS! NOTHING HERE", "KEEP TRYING!"];
  const shuffledPrizes = shufflePrizes([...prizes]);
  var flippedCard = false;
  var isCardShaken = false;

  picsPopOver.forEach((pic) => {
    new bootstrap.Popover(pic);
  })

  window.addEventListener('scroll', () => {
    const screenPos = board.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (screenPos < windowHeight ) {
      cards.forEach(card => {
        card.classList.add('fade-in-rotate');
      })
    }
  });

  function shakeCard(card) {
    if(isCardShaken) {
      card.classList.remove('shakecard');
    } else {
      card.classList.add('shakecard');
    }

    isCardShaken = !isCardShaken;
    
  }

  cards.forEach((card,i) => {
    card.addEventListener('click', ()=> {

        if(flippedCard) {
          shakeCard(card);
          return;
        }
           
        flippedCard = true;
        card.classList.add('flipped');
        var result = shuffledPrizes[i];

        if (result == "10% OFF" || result == "15% OFF" || result == "5% OFF" || result == "7% OFF" || result == "20% OFF") {
          var promoCode = Math.floor(Math.random() * 9000) + 1000;
          card.textContent = `WINNER!!!\n ${result} \n CODE: ${promoCode}`;
          card.classList.add('winningCard');
        } else {
          card.textContent = result;
        }
        
    })
  })
  
    function shufflePrizes(prizes) {
      return prizes.sort(() => Math.random() - 0.5);
    }
})
