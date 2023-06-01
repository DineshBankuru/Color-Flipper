var color="0123456789ABCDEF"

$("button").click(function()
{
    var string="";
    for(var i=0;i<6;i++)
    {
        var num=Math.floor(Math.random()*16);
        string+=color[num];
    }
    //console.log(string);
    $("body").css("background-color","#"+string);
    $("em").html("#"+string);
});