var canvas;
var ctx;
var x = 50;
var y = 50;
var square1;
var direction;
var questions;
var squareArray =[];
var fruitArray = [];
var lives = 3;
let score = 0;
$(document).ready(function(){
    
    setup();  
    
    $(this).keypress(function(event){
        getKey(event);
        
    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    square1 = new Square(50, 50, 50, 50, "red");
    fruitArray.push(new Fruit(100, 100, "green"));
    fruitArray.push(new Fruit(200, 200, "yellow"));


    
    $.getJSON("information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
        drawScore();
    });
    

    
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${score}`, 8, 20);
}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
    }
    if(actualLetter == "s")
    {
        moveDown();
        console.log("hi");
    }
    if(actualLetter == "a")
    {
        moveLeft();
    }
    if(actualLetter == "d")
    {
        moveRight();
    }

    drawSquare(); 
    
}

function decrementLives(){
    lives--;
    score--;
}
function checkAllCollisions(){
    let collision = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        collision = hasCollided(square1,squareArray[i]);

        if(collision)
        {
            break;
        }
    }

    console.log("Has Collided?", collision);
    return collision;
}

function moveUp()
{
    let collision = checkAllCollisions();
    if (!collision){
        square1.y-=10;
    }
    else{
        decrementLives();
        square1.y+=5;
    }
    
}
function moveDown()
{
    let collision = checkAllCollisions();
    if (!collision){
        square1.y+=10;
    }
    else{
        decrementLives();
        square1.y-=5;
    }
}

function moveRight()
{
    let collision = checkAllCollisions();
    if (!collision){
        square1.x+=10;
    }
    else{
        decrementLives();
        square1.x-=5;
    }
}
function moveLeft()
{
    let collision = checkAllCollisions();
    if (!collision){
        square1.x-=10;
    }
    else{
        decrementLives();
        square1.x+=5;
    }
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);

    

    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);

    for (let i = 0; i < squareArray.length; i++){
        let square = squareArray[i];
        ctx.fillStyle = square.mainColor;
        ctx.fillRect(square.x, square.y, square.width, square.height);
    }

    for (let i = 0; i < fruitArray.length; i++){
        let fruit = fruitArray[i];
        ctx.fillStyle = fruit.color;
        ctx.fillRect(fruit.x, fruit.y, 50, 50);
        
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);
    ctx.fillText("Score: " + score, 10, 80);    

}

class Fruit 
{
  constructor(x, y, color) 
  {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}