// Enemies our player must avoid
var Enemy = function (sprite = 'images/enemy-bug.png', x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between tick of the clock
// dt = (now -last time)/1000 milliseconds
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    let randomVar = Math.random()
    let scaledRandomVar = randomVar * 10 + 1;
    let seed = Math.floor(scaledRandomVar);
    let speed = 50 * seed;
    console.log("before this.x= " + this.x);
    if (this.x < 606) this.x = this.x + (dt * speed);
    else this.x = 0;
    randomVar = Math.random();

    console.log("dt=" + dt);
    console.log("randomVar=" + randomVar);
    console.log("scaledRandomVar=" + scaledRandomVar);
    console.log("seed=" + seed);
    console.log("speed=" + speed);
    console.log("after this.x=" + this.x);
    console.log('*****************************')

    if (this.x == 0) {
        this.y = chooseRandomRow();
    }
};


const chooseRandomRow = function (){
    const enemyRow = [60, 150, 240];
    return enemyRow[Math.floor((Math.random() * 3))]; 
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// *********Now write your own player class*************
// This class requires an update(), render() and
// a handleInput() method.
const canvass_width = 400;
const canvass_height = 533;
const col = 101;
const row = 83;

var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.xpos = canvass_width / 2;
    this.ypos = canvass_height - row;
};

Player.prototype.update = function () {
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.xpos, this.ypos);
}

Player.prototype.handleInput = function (arrowKeys) {
    switch (arrowKeys) {

        case 'left':
            if (this.xpos <= 0) {
                this.ypos = this.ypos;
                this.xpos = col;
            }
            this.xpos = this.xpos - col;
            this.ypos = this.ypos;
            break;

        case 'up':
            if (this.ypos <= 0) {
                this.ypos = canvass_height;
                this.xpos = canvass_width / 2;
            }
            this.xpos = this.xpos;
            this.ypos = this.ypos - row;
            break;

        case 'right':
            if (this.xpos >= canvass_width) {
                this.ypos = this.ypos;
                this.xpos = canvass_width - col;
            }
            this.xpos = this.xpos + col;
            this.ypos = this.ypos;
            break;

        case 'down':
            if (this.ypos >= (canvass_height - row)) {
                this.xpos = this.xpos;
                this.ypos = 450;
                break;
            }
            this.xpos = this.xpos;
            this.ypos = this.ypos + row;
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
const enemyRow = [60, 150, 240];

let i = 0;
while (i < 3) {
    let row = chooseRandomRow();
   
    switch (i) {
        case 0:
            allEnemies.push(new Enemy('images/enemy-bug.png', 0, row));
            break
        case 1:
            allEnemies.push(new Enemy('images/char-boy.png', 0, row));
            break
        default:
            allEnemies.push(new Enemy('images/char-boy.png', 0, row));
            break
    }
    i++;
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});


