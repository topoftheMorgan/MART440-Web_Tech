let pillow = {
    "Creator" : "Morgan Bowman",
    "Product" : "Animal Pillows",

    "Size" : {
        "width" : "15in", 
        "height" : "10in",
        },
    
    "Types" : [
        "Fox",
        "Panda",
        "Dog",
        "Husky"
    ]
}

$(function () {
$("button").click(function(){
    $.getJSON("ajax.js", function(result){
        $.each(result, function(i, field){
        $("div").append(field + " ");
        });
    });
    });
});


function showPillowInfo()
{
   /* $("#pillowInformation").html("Creator: " + pillow.Creator 
    + "<br>Product:" + pillow.Product + pillow.Size + "<br>width:" + pillow.Size.width + "<br>height:" 
    + pillow.Size.height + "<br>Types:<br>" +
    pillow.Types[0] + "<br>" + pillow.Types[1] + "<br>" + pillow.Types[2] + "<br>" + pillow.Types[3]);
    */

    $("#pillowInformation").html("Creator: " + pillow.Creator 
    + "<br>Product:" + pillow.Product + "<br>width:" + pillow.Size.width + "<br>height:" 
    + pillow.Size.height + "<br>Types:<br>" +
    pillow.Types[0] + "<br>" + pillow.Types[1] + "<br>" + pillow.Types[2] + "<br>" + pillow.Types[3]);
}
