var animalSelector = "#animal";
var allAnimals = new Array("./images/frog.jpeg","./images/hippo.jpeg","./images/owl.jpeg");
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

function allAnimals()
{
    document.getElementById("allAnimal").src = images[2];
}

function initializeArray()
{
    var animal = new AnimalInfo("#animal", "./images/frog.jpg","./images/hippo.jpeg","./images/owl.jpeg");
    allAnimals.push(animal);
}
    $(document).ready(function(){
        initializeArray();
        console.log(allAnimals.length);
        console.log(allAnimals[2].toString());
        console.log(allAnimals[2].theSelector);
        console.log(allAnimals[2].theImagePath);
        
    $(allAnimals[2].theSelector).attr("src", allAnimals[2].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
           setInterval(moveCircle, 1500);
        
        $(allAnimals[0].theSelector).fadeOut().fadeIn();
        
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

