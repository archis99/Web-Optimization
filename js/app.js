// Enemies our player must avoid
"use strict";
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = -100;
    //Assign random Y coordinates
    if (this.x === -100) {
        this.y = Math.floor(Math.random()*3)*85 + 60;
    }
    //Assign random Speed
    this.speed = Math.floor(Math.random()*300) + 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'img/minified-img/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //This If statement controls the speed of enemy
    //and makes sure that Enemy bugs cross the screen
    if(this.x <= 500){
        this.x += this.speed * dt;
    }
    //This Else condition repeats the enemy
    else{
        this.x = -10;
    }

    // Reset the game if player hits a bug and deduct 50 points
    if(player.x >= this.x - 50 && player.x <= this.x + 50){
        if(player.y >= this.y - 50 && player.y <= this.y + 50){
            player.resetPosition();
            player.score-=50;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y,score) {
  this.x = 200;
  this.y = 400;
  this.score = 0;
  this.sprite = 'img/minified-img/char-boy.png';
}

//Update function
Player.prototype.update = function() {
  //Controls both keyboard events and Player can not move off screen
    if (this.ctrlKey === 'left' && this.x > 0){
        this.x = this.x - 100;
    } else if (this.ctrlKey === 'right' && this.x != 400){
        this.x = this.x + 100;
    } else if (this.ctrlKey === 'up'){
        this.y = this.y - 85;
    } else if (this.ctrlKey === 'down' && this.y != 400){
        this.y = this.y + 85;
    }
    this.ctrlKey = null;
    //When player reaches the water;position
    //is reset and 100 points awarded; player
    //wins achiving total 200 points
    if (this.y < 60){
        this.score+=100;
        this.resetPosition();
        if(this.score >= 500) {
            alert("Congratulations!! You achived the Goal");
            this.score = 0;
        }
    }
};

//render function
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //Display Score
    ctx.font = "Bold 25px Sans serif";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + this.score, 0, 50);
};


//handleInput function
Player.prototype.handleInput = function(event) {
    this.ctrlKey = event;

};

//Reset player method
Player.prototype.resetPosition = function() {
  this.x = 200;
  this.y = 400;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(0, 75);
var enemy2 = new Enemy(-2, 75);
var enemy3 = new Enemy(0, 150);
var enemy4 = new Enemy(-2, 150);
var allEnemies = [enemy1, enemy2, enemy3,enemy4];

// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
