var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2, square3, square4, square5;
var direction;
var questions;
var squareArray = [];
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

    square1 = new Square(100,100,50,50,"blue");
    square2 = new Square(200,200,100,100,"#70002e");
    square3 = new Square(300,300,150,150,"#green");
    square4 = new Square(500,500,250,250,"purple");
    square5 = new Square(400,400,100,100,"pink");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
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
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(square1,square2, square3, square4, square5);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }
        
        //console.log(test2);
    }
    if(test || test2)
    {
        lives--;
        score--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    
    }
    drawSquare(); 
    
}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    ctx.fillStyle = square3.mainColor;
    ctx.fillRect(square3.x, square3.y, square3.width, square3.height);
    ctx.fillStyle = square4.mainColor;
    ctx.fillRect(square4.x, square4.y, square4.width, square4.height);
    ctx.fillStyle = square5.mainColor;
    ctx.fillRect(square5.x, square5.y, square5.width, square5.height);

    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);
    ctx.fillText("Score: " + score, 10, 70);    

}

drawScore();

function hasCollided(object1, object2, object3, object4, object5) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||

        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width)) ||

        ((object1.y + object1.height) < (object3.y)) ||
        (object1.y > (object3.y + object3.height)) ||

        ((object1.x + object1.width) < object3.x) ||
        (object1.x > (object3.x + object3.width)) ||

        ((object1.y + object1.height) < (object4.y)) ||
        (object1.y > (object4.y + object4.height)) ||

        ((object1.x + object1.width) < object4.x) ||
        (object1.x > (object4.x + object4.width))

        ((object1.y + object1.height) < (object5.y)) ||
        (object1.y > (object5.y + object5.height)) ||

        ((object1.x + object1.width) < object5.x) ||
        (object1.x > (object5.x + object5.width))
    );
}