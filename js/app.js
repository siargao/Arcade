// Enemies our player must avoid
var Enemy = function(sprite = 'images/enemy-bug.png', x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between tick of the clock
// dt = (now -last time)/1000 milliseconds
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < 606)
    this.x = this.x + (101*dt);
    else this.x = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.xpos = 200;
    this.ypos = 450;
};

Player.prototype.update = function(){
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.xpos, this.ypos);
}

Player.prototype.handleInput = function(arrowKeys){
    const canvass_width = 400;
    const canvass_height = 533;
    const col = 101;
    const row = 83;
    switch(arrowKeys) {

        case 'left':
            if(this.xpos <= 0){
                this.ypos = this.ypos;
                this.xpos = col;                
            }
            this.xpos = this.xpos - col;
            this.ypox = this.ypos;   
            break;

        case 'up':
            if(this.ypos <= 0){
               // alert("You reached 0 position; you are on top");
                this.ypos = canvass_height;
                this.xpos = canvass_width/2;
            }       
            this.xpos = this.xpos;
            this.ypos = this.ypos - row;           
            break;    

        case 'right':
            if(this.xpos >= canvass_width){
                this.ypos = this.ypos;
                this.xpos = canvass_width-col;                
            }
            this.xpos = this.xpos + col;
            this.ypox = this.ypos;
            break;

        case 'down':
            if(this.ypos >= (canvass_height-row)){
    //        alert('your current ypos: ' + this.ypos);
               this.xpos = this.xpos;
               this.ypos = 450;
               break;
            }
            this.xpos = this.xpos;
            this.ypos = this.ypos + row;
            //alert('your current ypos: ' + this.ypos);
            break;    

        default:
            break;
    }
    
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//const allEnemies = Object.keys(Enemy).map(i => Enemy[i]);
const player = new Player();
const allEnemies = [];
enemy1 = new Enemy('images/enemy-bug.png',0,60);
allEnemies.push(enemy1);
enemy2 = new Enemy('images/enemy-bug.png',0,150);
allEnemies.push(enemy2);
enemy3 = new Enemy('images/enemy-bug.png',0,240);
allEnemies.push(enemy3);

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
