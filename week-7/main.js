var myViewFinderArray = new Array();

//  main ViewFinder class
class ViewFinder
{
    //first
    constructor(title, author, img, description, date)
    {
        this.title = title;
        this.author = author; 
        this.img = img; 
        this.date = date; 
        this.description = description; 
    }

    toString()
    {
        return "Title: " + this.title;    
    }

    get theTitle()
    {
        return this.title;
    }

}

let array = [new ViewFinder('Dragon Breath', 'Cornelia Funke', '/images/Dragon.jpeg', "DRAGON RIDER follows the tale of Firedrake, a young dragon who sets off on a quest to find the acclaimed Rim of Heaven after learning that his home–and all the dragons that live in it–are in grave danger of a man-induced flood that will destroy their riparian home.", 1997),
new ViewFinder('Nancy Drew: The Secret of the Old Clock', 'Carolyn Keene', '/images/nancy.jpeg', "The Secret of the Old Clock is the mystery that began it all for America's favorite teenaged slueth. The accidental rescue of a little girl who lives with her two great-aunts leads to an adventurous search for a missing will.", 1930),
new ViewFinder('Stormbreaker', 'Anthony Horowitz', '/images/storm.jpeg', "Fourteen-year-old Alex Rider finds his life turned upside down on discovering that his late uncle wasn't a mild-mannered banker, but instead a field agent for MI6. Soon, Alex himself is dragged into the world of espionage and intrigue.", 2000),
new ViewFinder('A Wizards Guide to Defensive Baking', 'Ursula Vernon', '/images/baking.jpeg', "When teenage bread wizard Mona discovers a corpse in her family's bakery, it triggers a chain of events that leads to her managing the city's defense against military assault, with the aid of animate gingerbread men and her familiar — a sourdough starter.", 2020),
new ViewFinder('Thron of Glass', 'Sarah J. Maas', '/images/throne.jpeg', "Throne of Glass is a high fantasy novel series by American author Sarah J. Maas, beginning with the entry of the same name, released in August 2012. The story follows the journey of Celaena Sardothien, a teenage assassin in a corrupt kingdom with a tyrannical ruler, the King of Adarlan.", 2012)]; 
// document.getElementById("title").innerHTML = array[0].titles; 


function initializeArray()
{
    // first object
    var myViewFinder = new ViewFinder("Dragon Rider");
    // second object
    var myViewFinder1 = new ViewFinder("A Wizards Guide to Defensive Baking");
    // first object
    myViewFinderArray.push(myViewFinder);
    //second object
    myViewFinderArray.push(myViewFinder1);

}

function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * array.length);
    // get a random object from the array
    // document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("title").innerHTML = array[randomNumber].title;
    document.getElementById("image").src = array[randomNumber].img;
    document.getElementById("description").innerHTML = array[randomNumber].description;
    document.getElementById("authorAndDate").innerHTML = array[randomNumber].author + ' ' + array[randomNumber].date;

    // ßdocument.getElementById("title").innerHTML = array[0].title;


}