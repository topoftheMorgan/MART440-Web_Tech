$(document).ready(function () {
    $("button").click(function () {
        $("#pillowInformation").load("data/pillowInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#pillowInformation").fadeOut("slow").fadeIn("slow");
}