var animalSelector = "#animal";
var allAnimals = new Array();
class AnimalInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function changeAnimals()
{
    var randomNumber = Math.floor(Math.random() * allAnimals.length);

    $(allAnimals[randomNumber].theSelector).fadeOut(500).fadeIn(500);

    document.getElementById("animal").src = allAnimals[randomNumber].imagePath;

}

function initializeArray()
{
    allAnimals.push(new AnimalInfo("#animal", "./images/frog.jpeg"));
    allAnimals.push(new AnimalInfo("#animal", "./images/hippo.jpeg"));
    allAnimals.push(new AnimalInfo("#animal", "./images/owl.jpeg"));
    allAnimals.push(new AnimalInfo("#animal", "./images/panda.jpeg"));
    allAnimals.push(new AnimalInfo("#animal", "./images/fox.jpeg"));
  
}
    $(document).ready(function(){
        initializeArray();
        console.log(allAnimals.length);
        console.log(allAnimals[2].toString());
        console.log(allAnimals[2].theSelector);
        console.log(allAnimals[2].theImagePath);
        
    $(allAnimals[2].theSelector).attr("src", allAnimals[2].theImagePath);

    $("button").click(function()
    {
       // changeAnimals()
        
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
           setInterval(moveCircle, 1500);
           setInterval(changeAnimals, 1000);

           $("#third").text("Cycle of random animals! :)");
           console.log()
        
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

function moveCircle()
{
    $("#circle").animate({left:450}).animate({top:500}).animate({left:20}).animate({top:100});
}

