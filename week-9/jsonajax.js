$(document).ready(function () {
    $("button").click(function () {
        $("#pillowInformation").load("data/pillow.json", function(responseText){
            var pillow = JSON.parse(responseText);
                $("#pillowInformation").html("Creator: " + pillow.Creator 
            + "<br>Product:" + pillow.Product + pillow.Size + "<br>width:" + pillow.Size.width + "<br>height:" 
            + pillow.Size.height + "<br>Types:<br>" +
            pillow.Types[0] + "<br>" + pillow.Types[1] + "<br>" + pillow.Types[2] + "<br>" + pillow.Types[3]);
        });
    });
});



/* function fadeText()
{
    $("#bikeInformation").fadeOut("slow").fadeIn("slow");
}
*/