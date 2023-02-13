function getChoice1(){
    {
        var myChoice = document.getElementById("choice").value;
        var myQuestion = document.getElementById("question");
        if(myChoice === "village")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";
            
            document.getElementById("choice2").style.display="block";
            document.getElementById("btnSubmit2").style.display="block";
            
            document.getElementById("mainImage").src = "wizard.jpeg"
            myQuestion.innerHTML = "You go out into the village and see a knight and the village bum. Who do you ask?";
        }
        else if(myChoice === "party")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";
            
            document.getElementById("choice3").style.display="block";
            document.getElementById("btnSubmit3").style.display="block";

            document.getElementById("mainImage").src = "toad.png"
            myQuestion.innerHTML = "You invite all of the other apprentices in the village to your party but, only five minutes passed when the security system went off and turned everyone into toads." + "<br>Do you want to try again?";

        }
        /*else if(myChoice === "try again")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";
            
            document.getElementById("choice2").style.display="block";
            document.getElementById("btnSubmit2").style.display="block";
    
            myQuestion.innerHTML = "You find that your mentor has been gone longer than expected. They did mention not to go after them, but you are starting to get worried. <br>You can either go into the village and ask around or shrug off your worry and host a party.";

        }*/
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }

    }
}

function getChoice2()
{
    var myChoice = document.getElementById("choice2").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "bum")
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
        
        document.getElementById("choice4").style.display="block";
        document.getElementById("btnSubmit4").style.display="block";
        
        document.getElementById("mainImage3").src = "bum.jpg"
        myQuestion.innerHTML = "You make your way to the bum moving with caution. You ask the man if he knows anything about your mentor. “I might, I might not” he replies. He won’t talk for free. Do you buy him a meal or do you try to force it out of him?";
    }
    else if(myChoice === "knight")
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";

        document.getElementById("mainImage4").src = "dungon.jpg"
        myQuestion.innerHTML = "You walk up to the knight and express your concern about your mentor. He claims he doesn't know anything but finds you suspicious. You were brought into custody for further questioning." + "<br>Do you want to try again?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }

}


function getChoice3()
{
    var answer = document.getElementById("choice3").value;
    var myQuestion = document.getElementById("question");
    if(answer === "try again")
    {
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";
        
        document.getElementById("choice0").style.display="block";
        document.getElementById("btnSubmit0").style.display="block";

        myQuestion.innerHTML = "You find that your mentor has been gone longer than expected. They did mention not to go after them, but you are starting to get worried. You can either go into the village and ask around or shrug off your worry and host a party.";
    }
    else (answer === "no")
    {
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";
        
        document.getElementById("choice0").style.display="block";
        document.getElementById("btnSubmit0").style.display="block";

        myQuestion.innerHTML = "Continue";
    }
}  

function getChoice4()
{
    var myChoice = document.getElementById("choice4").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "meal")
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";
        
        document.getElementById("choice5").style.display="block";
        document.getElementById("btnSubmit5").style.display="block";
        
        document.getElementById("mainImage5").src = "pub.jpg"
        myQuestion.innerHTML = "You offer the bum a meal and he accepts. You go into the local tavern and sit down to order. Your wallet is fairly light at the moment but you know how devious this bum can be. Do you just get him food or a drink as well?";
    }
    else if(myChoice === "force")
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";

        document.getElementById("mainImage6").src = "beat.jpeg"
        myQuestion.innerHTML = "You threaten the bum to give you answers. You wake up on the ground covered in mud and the bum no where to be seen." + "<br>Do you want to try again?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice5()
{
    var myChoice = document.getElementById("choice5").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "food and drink")
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";
        
        document.getElementById("choice6").style.display="block";
        document.getElementById("btnSubmit6").style.display="block";
        
        document.getElementById("mainImage7").src = "meed.jpg"
        myQuestion.innerHTML = "You watch the bum scarf down the plate of food and down the ale. He tells you he saw your mentor being ruffed up and dragged away into the haunted forest yesterday. Do you go home and stew on this new found Information or do you head into the haunted forest to find your mentor?";
    }
    else if(myChoice === "just food")
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";

        document.getElementById("mainImage8").src = "food.webp"
        myQuestion.innerHTML = "You watch the bum scarf down the plate of food. All that he tells you is that he saw your mentor just fine a few days ago. You can't do anything with this information." + "<br>Do you want to try again?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice6()
{
    var myChoice = document.getElementById("choice6").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "forest")
    {
        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";
        
        document.getElementById("mainImage9").src = "forest.jpg"
        myQuestion.innerHTML = "You head straight to the forest taking a deep breath before starting your new found adventure. Good luck!" + "<br>Do you want to try again?";
    }
    else if(myChoice === "home")
    {
        document.getElementById("choice6").style.display="none";
        document.getElementById("btnSubmit6").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";

        document.getElementById("mainImage6").src = "beat.jpeg"
        myQuestion.innerHTML = "You decide to go home to plan out what to do. On your way there, you get jumped by a group of ruffians and lost everything on you." + "<br>Do you want to try again?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }

}
