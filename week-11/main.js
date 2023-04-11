var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var x3 = 150;
var y3 = 150;
var x4 = 200;
var y4 = 200;
var square1;
var square2;
var square3;
var square4;

// Squares
createSquares();

drawSquare();

// Timer
setInterval(moveColorSquare, 5000);

function createSquares() {
    square1 = new Square(x, y, 20, 20, "blue");
    square2 = new Square(x2, y2, 50, 50, "purple");
    square3 = new Square(x3, y3, 50, 50, "pink");
    square4 = new Square(x4, y4, 50, 50, "red");
}

// Random
function moveColorSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));

    square3.setX(Math.floor(Math.random() * canvas.width));
    square3.setY(Math.floor(Math.random() * canvas.height));

    square4.setX(Math.floor(Math.random() * canvas.width));
    square4.setY(Math.floor(Math.random() * canvas.height));
    console.log(canvas.width)
    console.log(canvas.height)

    drawSquare();
}

// Locations
function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

    ctx.fillStyle = square3.theColor;
    ctx.fillRect(square3.theX, square3.theY, square3.theWidth, square3.theHeight);

    ctx.fillStyle = square4.theColor;
    ctx.fillRect(square4.theX, square4.theY, square4.theWidth, square4.theHeight);
}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// Movement and Collision
function getKey(event) {

    // Colision
    var didCollide = hasCollided(square1, square2);
    
    if (didCollide) {
        
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        
        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);

        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);

        square3.setWidth(square3.theWidth + 1.5);
        square3.setHeight(square3.theHeight + 1.5);

        square4.setWidth(square4.theWidth - 1.5);
        square4.setHeight(square4.theHeight - 1.5);
    }
    // Movement
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    
    drawSquare();
}


function moveUp() {
    if (square1.theY >= 10){
        square1.setY(square1.theY - 10);
    }
}

function moveDown() {
    if (square1.theY <= 575){
        square1.setY(square1.theY + 10);
    }
}

function moveLeft() {
    if (square1.theX >= 10){
        square1.setX(square1.theX - 10);
    }
}

function moveRight() {
    if (square1.theX <= 775){
        square1.setX(square1.theX + 10);
    }
}

// Collision
function hasCollided(object1, object2, object3, object4) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||

        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))

       /* ((object1.y + object1.height) < (object3.y)) ||
        (object1.y > (object3.y + object3.height)) ||

        ((object1.x + object1.width) < object3.x) ||
        (object1.x > (object3.x + object3.width))

        ((object1.y + object1.height) < (object4.y)) ||
        (object1.y > (object4.y + object4.height)) ||

        ((object1.x + object1.width) < object4.x) ||
        (object1.x > (object4.x + object4.width))*/
    );
}