function storyFunction(choice){

    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
   console.log(answer1)
   
   if (choice == 1 && answer1 == "Try Again") {
        document.getElementById("story").innerHTML = "Will you go on an adventure?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "You want to gather some supplies before heading out where will you check?";
        document.getElementById("choice1").innerHTML = "Chest";
        document.getElementById("choice2").innerHTML = "Fridge";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "You decided to stay home and get some rest." + "<br>Try Again?";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    } else if (choice == 1 && answer1 == "Chest") {
        document.getElementById("story").innerHTML = "You dig around the old wooden chest in the corner of your room. You decide you want to carry only one thing…";
        document.getElementById("choice1").innerHTML = "Knives";
        document.getElementById("choice2").innerHTML = "Sheild";
    } else if (choice == 2 && answer2 == "Fridge") {
        document.getElementById("story").innerHTML = "You dig around the fridge and get caught up in the idea of a freshly cooked meal. You decided to go on an adventure some other time.";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    } else if (choice == 1 && answer1 == "Knives") {
        document.getElementById("story").innerHTML = "You take the knives and head out. You come across a dark cave and hear a low rumbling growl echo along the walls…";
        document.getElementById("choice1").innerHTML = "Check it Out";
        document.getElementById("choice2").innerHTML = "Leave";
    } else if (choice == 2 && answer2 == "Sheild") {
        document.getElementById("story").innerHTML = "You take the sheild and head out. You come across a dark cave and hear a low rumbling growl echo along the walls…";
        document.getElementById("choice1").innerHTML = "Investigate";
        document.getElementById("choice2").innerHTML = "Leave";
    } else if (choice == 1 && answer1 == "Leave") {
        document.getElementById("story").innerHTML = "You leave any bit of curiosity behind you and go home. Better safe than sorry." + "<br>Try Again?";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    } else if (choice == 2 && answer2 == "Leave") {
        document.getElementById("story").innerHTML = "You leave any bit of curiosity behind you and go home. Better safe than sorry." + "<br>Try Again?";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    } else if (choice == 1 && answer1 == "Check it Out") {
        document.getElementById("story").innerHTML = "You go into the darkness with a knife at the ready. You see a pair of glowing yellow eyes and then a flash of bright light. At least you were delicious." + "<br>Try Again?";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    } else if (choice == 1 && answer1 == "Investigate") {
        document.getElementById("story").innerHTML = "You go into the darkness with your shield at the ready. You see a pair of glowing yellow eyes and then a flash of bright light. You shield protected you from the fire allowing you to get away.";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    } else if (choice == 2 && answer2 == "Another Time") {
        document.getElementById("story").innerHTML = "Thanks for playing!";
        document.getElementById("choice1").innerHTML = "Try Again";
        document.getElementById("choice2").innerHTML = "Another Time";
    }
}
