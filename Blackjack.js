var BlackjackGame = function(){
  this.total = 0;
  this.card = 0;
  this.nextCard = function(){
    randomCard = Math.floor((Math.random() * 13) + 1);
    this.card = randomCard;
    console.log(this.card + " Is the new card!");
  };
  this.play = function(){
      this.nextCard();
      this.total += this.card;
      if (this.total < 21) {
      console.log("Your new total is: " + this.total + " Do you wanna continue playing, or wanna stand?");
       }
       else if (this.total === 21) {
         this.total = 0;
         this.card = 0;
         alert("YOU'VE WON $1,000,000!!");
       }
       else {
         this.total = 0;
         this.card = 0;
         alert("You've lost :(... Wanna go again? :)");
       }
      };
  this.stand = function() {
    alert("Game over your total is: " + this.total);
    this.total = 0;
    this.card = 0;
  };
};

BlackjackGame.prototype.constructor = BlackjackGame;

var game = new BlackjackGame();
game.play();
