var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];

var blankImagePath = "./images/card.png";

var actualImages = new Array("images/bird.webp", "images/bunny.jpg", "images/cat.jpeg", "images/cheeta.webp", "images/duck.jpeg", "images/cat.jpeg", "images/bird.webp", "images/cheeta.webp", "images/bunny.jpg", "images/duck.jpeg");
    
function printBlanks()
{
    //make random image 
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
}

function createRandomImageArray()
{
    // array of actual images
    var actualImagePath = ["images/bird.webp", "images/bunny.jpg", "images/cat.jpeg", "images/cheeta.webp", "images/duck.jpeg", "images/fox.jpeg", "images/frog.jpeg", "images/hippo.jpeg", "images/owl.jpeg", "images/panda.jpeg"];

    var count = [0,0];

    while(actualImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 8)
        {
            actualImages.push(actualImagePath[randomNumber]);
            
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
        
}

