
document.querySelector("button").addEventListener("click",function(){

    document.querySelector("h1").innerHTML="Congratulations...";

// random number player 1 and 2
let rnp1=Math.floor(6*Math.random())+1;
let rnp2=Math.floor(6*Math.random())+1;


document.querySelectorAll('div.dice img')[0].setAttribute("src","images/dice"+rnp1+".png");
document.querySelectorAll('div.dice img')[1].setAttribute("src","images/dice"+rnp2+".png");

if(rnp1>rnp2)
{
    document.querySelector(".result").innerHTML="Player 1 wins";
}
else if(rnp1<rnp2)
{
    document.querySelector(".result").innerHTML="Player 2 wins";
}
else
document.querySelector(".result").innerHTML="Draw";
});