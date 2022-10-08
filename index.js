var RandNum1 = Math.floor(Math.random()*6)+1;
var RandImg1 = "images/" + "Dice" + RandNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", RandImg1);


var RandNum2 = Math.floor(Math.random()*6)+1;
var RandImg2= "images/" + "Dice" + RandNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", RandImg2);

if(RandNum1 >RandNum2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(RandNum1 < RandNum2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}

